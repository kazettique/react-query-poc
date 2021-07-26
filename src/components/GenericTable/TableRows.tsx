import { ReactElement } from 'react';
import { ColumnDefinitionType, TableRowsClassNameType } from './types';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  className?: TableRowsClassNameType;
};

function TableRows<T, K extends keyof T>({ data, columns, className }: TableRowsProps<T, K>): ReactElement {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={`row-${index}`} className="text-yellow-300">
          {columns.map((column, index2) => {
            return (
              <td key={`cell-${index2}`} className="border border-yellow-300">
                <span className="px-6 py-3 flex items-center">{row[column.key]}</span>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableRows;
