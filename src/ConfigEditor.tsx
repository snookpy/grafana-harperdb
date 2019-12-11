// Libraries
import React, { PureComponent } from 'react';

import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { DataSourceHttpSettings } from '@grafana/ui';

type Props = DataSourcePluginOptionsEditorProps<any>;

/**
 * Empty Config Editor -- settings to save
 */

 interface states {
  defaultUrl: string;
 }
export class ConfigEditor extends PureComponent<Props, states> {

  
  state = {
    defaultUrl: "http://localhost:9920"
  }
  render() {
    console.log(this.props)
    return (<div>
      <DataSourceHttpSettings
        defaultUrl={this.state.defaultUrl}
        onChange={this.props.onOptionsChange}
        dataSourceConfig={this.props.options}
        showAccessOptions={true}
      />
    </div>)
  }
}
