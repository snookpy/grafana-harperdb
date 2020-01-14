// Libraries
import React, { PureComponent } from 'react';

import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { DataSourceHttpSettings } from '@grafana/ui';

type Props = DataSourcePluginOptionsEditorProps<any>;

interface states {
  defaultUrl: string;
}
export class ConfigEditor extends PureComponent<Props, states> {


  state = {
    defaultUrl: "http://localhost:9920"
  }
  render() {
    return (
        <div>
          <DataSourceHttpSettings
            defaultUrl={this.state.defaultUrl}
            onChange={this.props.onOptionsChange}
            dataSourceConfig={this.props.options}
            showAccessOptions={true}
          />
        </div>
    )
  }
}
