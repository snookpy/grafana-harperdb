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

  convertToDatapoints(datas: any[], metricField, timeField) {
    return datas.reduce((arr: any[], d) => {
      return [...arr, 
        [
          d[metricField], d[timeField]
        ]
      ]
    }, [])
  }

  callHarperdbSQL(target: string, sql: string, metricField: string, timeField: string) {
    return new Promise((res, rej) => {
      this.doRequest(
        {
          operation: 'sql',
          sql
        },
      ).then((response: any) => {

        response.data = { target, datapoints: this.convertToDatapoints(response.data, metricField, timeField) }
        res(response)
      })
        .catch((err: any) => {
          console.log("error ", err)
          res({ ...err, message: err.data.message, error: err.data.error })
        })
    })
  }

  async buildQueryPatternAndExecute(targets: TemplateQuery[]) {
    const promiseArr = targets.map(t => {
      return this.callHarperdbSQL(t.refId, t.metric, t.useMetric, t.useTime)
    })

    const results: any = await Promise.all(promiseArr);
    const someItemError = results.find((r: any) => r.status !== 200)

    let responseSentBack;

    if (someItemError) {
      responseSentBack = someItemError
    } else {
      responseSentBack = results[0]
      
      // reduce data array out from {status:200, data:{target: 'a', datapoints: [1,2]} } 
      // to {status, target: 'a', datapoints: [1,2]}
      responseSentBack.data = results.filter(f => f.status === 200).reduce((arr, r) => {
        return [...arr, r.data]
      }, []) 
    }

    return responseSentBack
  }

  async query(options: DataQueryRequest<TemplateQuery>): Promise<{ data: TimeSeries[] }> {

    // TODO: will refactor hiding bug
    const targets = options.targets.filter(t => !t.hide);

    if (targets.length <= 0) {
      return { data: [] };
    }

    const results = await this.buildQueryPatternAndExecute(options.targets)
    return  results;
  }

  async testDatasource() {
    return this.doRequest({
      operation: 'describe_all',
    }
    ).then((response: any) => {
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

  /**
  * query one record for geting all fields
  * @param {query} Sql query string
  * @return {string[]} Array of fields
  */
  async getFields(query: string) {
    try {
    query = this.addLimitQueryString(query);
    const result = await this.doRequest({ sql: query, operation: "sql" });

    let fields = []
    if (result.data.length > 0) {
      fields = [...Object.keys(result.data[0])];
    }

    return fields;
    } catch (e) {
      return [];
    }
  }

  /**
  * build query string to have LIMIT 1
  * @param {query} Sql query string
  * @return {query} query string contain LIMIT 1
  */
  addLimitQueryString(query: string) {
    const hasLimit = query.match(/limit/gi);
    if (hasLimit) {
      const useLimit = hasLimit[0];
      query = query.substr(0, query.indexOf(useLimit) - 1);
    }

    query += " LIMIT 1"
    return query;
  }

  doRequest(data: any) {
    const options = {
      withCredentials: this.withCredentials,
      headers: this.headers,
      url: this.url,
      method: 'POST',
      data: data
    }

    return this.backendSrv.datasourceRequest(options);
  }
}
