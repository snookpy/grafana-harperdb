import { TemplateDatasource } from './datasource';
import { TemplateQuery } from './types';

import { Select, QueryField } from '@grafana/ui';

import { SelectableValue, QueryEditorProps } from '@grafana/data';

import React, { PureComponent } from 'react';

export type Props = QueryEditorProps<TemplateDatasource>;

const FORMAT_OPTIONS: Array<SelectableValue<string>> = [
  { label: 'Time series', value: 'time_series' }
];

interface State {
  formatOption: SelectableValue<string>;
};

export class TemplateQueryEditor extends PureComponent<Props, State> {

  query: TemplateQuery;

  constructor(props: Props) {
    super(props);
    const { query } = props;

    this.query = query;

    this.state = {
      formatOption: FORMAT_OPTIONS.find(option => option.value === this.query.format) || FORMAT_OPTIONS[0],
    }
  }

  onRunQuery = () => {
    const { query } = this;
    this.props.onChange(query);
    this.props.onRunQuery();
  };

  onFormatChange = (option: SelectableValue<string>) => {
    this.query.format = option.value;
    this.setState({ formatOption: option }, this.onRunQuery);
  };

  onQueryChange = (value: string) => {
    this.query.metric = value
  }

  render() {
    const { formatOption } = this.state;

    return (
      <div>
        <div className="gf-form">
          <div className="gf-form-label">Format</div>
          <Select
            allowCustomValue={true}
            isSearchable={false} options={FORMAT_OPTIONS} onChange={this.onFormatChange} value={formatOption} />
            <QueryField 
              query={"SELECT metric time"}
              portalOrigin={"eiei"}
              onChange={this.onQueryChange}
              onRunQuery={this.onRunQuery}
            />
        </div>
      </div>
    );
  }
}
