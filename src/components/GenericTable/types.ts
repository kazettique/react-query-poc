export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
};

export type TableRowsClassNameType = {
  trClassName: string;
  tdClassName: string;
};

export type TableHeaderClassNameType = {
  thClassName: string;
  trClassName: string;
};

export type GenericTableClassNameType = {
  tableClassName: string;
  headerClassName: TableHeaderClassNameType;
  rowClassName: TableRowsClassNameType;
};
