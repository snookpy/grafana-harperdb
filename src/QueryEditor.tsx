import { TemplateDatasource } from './datasource';
import { TemplateQuery } from './types';

import { Select, QueryField } from '@grafana/ui';

import { SelectableValue, QueryEditorProps } from '@grafana/data';

import React, { PureComponent } from 'react';
import SelectMetricAndTime from './components/SelectMetricAndTime';

export type Props = QueryEditorProps<TemplateDatasource>;

const FORMAT_OPTIONS: Array<SelectableValue<string>> = [
  { label: 'Time series', value: 'time_series' }
];

interface State {
  formatOption: SelectableValue<string>;
  selectsFields: string[];
  metric: any;
  time: any;
};

export class TemplateQueryEditor extends PureComponent<Props, State> {

  query: TemplateQuery;

  constructor(props: Props) {
    super(props);
    const { query } = props;

    this.query = query;

    this.state = {
      formatOption: FORMAT_OPTIONS.find(option => option.value === this.query.format) || FORMAT_OPTIONS[0],
      selectsFields: [],
      metric: "",
      time: ""
    }
  }

  onRunQuery = async () => {
    const { query } = this;
    this.props.onChange(query);
    const fields = await this.props.datasource.getFields(query.metric);
    this.setState({
      selectsFields: fields
    })
  };

  onFormatChange = (option: SelectableValue<string>) => {
    this.query.format = option.value;
    this.setState({ formatOption: option }, this.onRunQuery);
  };

  onQueryChange = (value: string) => {
    this.query.metric = value
    
  }

  onSubmit = () => {
    const { metric, time } = this.state;
    if(metric && time){
    this.props.onRunQuery();
    } else {
      alert("Metric and Time field cannot be blank!")
    }
  }

  onSelectMetric = (metric: any) => {
    this.setState({
      metric: metric
    })
    this.query.useMetric = metric
  }

  onSelectTime = (time: any) => {
    this.setState({
      time: time
    })
    this.query.useTime = time
  }

  render() {
    const { formatOption, selectsFields } = this.state;

    return (
      <div>
        <div className="gf-form">
          <div className="gf-form-label">Format</div>
          <Select
            allowCustomValue={true}
            isSearchable={false} options={FORMAT_OPTIONS}
            onChange={this.onFormatChange} value={formatOption}
          />
          <QueryField
            query={"SELECT metric, time FROM ?"}
            portalOrigin={""}
            onChange={this.onQueryChange}
            onRunQuery={this.onRunQuery}
          />

        </div>
        <SelectMetricAndTime
          selectFields={selectsFields}
          onSelectMetric={this.onSelectMetric}
          onSelectTime={this.onSelectTime}
        />
        <button type="button" onClick={this.onSubmit}
          style={{ marginTop: '12px' }}
          className="btn navbar-button"
        >
          Generate
        </button>

      </div>
    );
  }
}
