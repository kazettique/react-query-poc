import { ReactElement } from 'react';
import { ColumnDefinitionType, TableHeaderClassNameType } from './types';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
  className?: TableHeaderClassNameType;
};

function TableHeader<T, K extends keyof T>({ columns, className }: TableHeaderProps<T, K>): ReactElement {
  return (
    <thead>
      <tr className="text-left">
        {columns.map((column, index) => (
          <th
            key={`headCell-${index}`}
            className="sticky top-0 border border-yellow-300 bg-yellow-300 text-gray-800 font-bold px-6 py-2 tracking-wider uppercase"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
