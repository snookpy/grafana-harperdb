import { TemplateQuery } from './types';

import {
  DataSourceApi,
  DataQueryRequest,
  DataSourceInstanceSettings,
} from '@grafana/data';
import { TimeSeries } from '@grafana/data';


export class TemplateDatasource extends DataSourceApi<TemplateQuery> {

  type: string;
  url: string;
  name: string;
  headers: any;
  withCredentials: boolean;

  /** @ngInject */
  constructor(instanceSettings: DataSourceInstanceSettings, private backendSrv) {
    super(instanceSettings);

    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.backendSrv = backendSrv;
    this.name = instanceSettings.name;

    this.withCredentials = instanceSettings.withCredentials;

    this.headers = { 'Content-Type': 'application/json' };
    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      this.headers['Authorization'] = instanceSettings.basicAuth;
    }
  }

  convertToDatapoints(datas: any[]) {
    return datas.reduce((arr: any[], d)=> {
      return [...arr , [d.metric, d.time]]
    },[])
  }

  callHarperdbSQL(target: string, sql: string) {
    return new Promise((res, rej) => {
      this.doRequest({
        url: this.url,
        method: 'POST',
        data: {
          operation: 'sql',
          sql
        },
      }).then((response: any) => {

        response.data = { target, datapoints: this.convertToDatapoints(response.data) }
        res(response)
      })
        .catch((err: any) => {
          console.log("error ", err)
          res({...err, message: err.data.message, error: err.data.error})
        })
    })
  }

  async buildQueryPattern(targets: TemplateQuery[]) {
    const promiseArr = targets.map(t => this.callHarperdbSQL(t.refId, t.metric))

    const results: any = await Promise.all(promiseArr);

    const someItemError = results.find((r: any) => r.status !== 200)

    let responseSentBack;

    if(someItemError) {
      
      responseSentBack = someItemError
    } else {
      responseSentBack = results[0]
    }

    console.log("someItemError someItemError someItemError", responseSentBack)
    /// format grafana's responses
    responseSentBack.data = results.filter(f => f.status === 200).reduce((arr, r) => {
        return [...arr, r.data]
    }, [])
    console.log("results results results:", responseSentBack)
    return responseSentBack
  }

  async query(options: DataQueryRequest<TemplateQuery>): Promise<{ data: TimeSeries[] }> {

    const targets = options.targets.filter(t => !t.hide);

    await this.buildQueryPattern(options.targets)

    if (targets.length <= 0) {
      return { data: [] };
    }

    // return {
    //   data: targets.map(t => ({
    //     target: t.refId,
    //     datapoints: [
    //       [3.14, options.range.from.valueOf()],
    //       [42, options.range.to.valueOf()]
    //     ]
    //   }))
    // };
    return await this.buildQueryPattern(options.targets)
  }

  async testDatasource() {
    return this.doRequest({
      url: this.url,
      method: 'POST',
      data: {
        operation: 'describe_all',
      },
    }).then((response: any) => {
      if (response.status === 200) {
        return {
          status: 'success',
          message: 'Data source is working',
          title: 'Success',
        };
      }

      return {
        status: 'error',
        message: 'Data source somthing when wrong',
        title: 'Error',
      };
    });
  }

  async metricFindQuery(query: string) {
    return [
      {
        text: 'Metric Name',
        value: 'metric_name'
      }
    ];
  }

  doRequest(options: any) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;

    return this.backendSrv.datasourceRequest(options);
  }
}
