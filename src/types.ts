import { DataQuery } from '@grafana/data';

export interface TemplateQuery extends DataQuery {
  format?: string;
  useMetric?: any;
  useTime?: any;
};
