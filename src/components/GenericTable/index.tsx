import { ReactElement } from 'react';

// components
import TableHeader from './TableHeader';
import TableRows from './TableRows';

// types
import { ColumnDefinitionType, GenericTableClassNameType } from './types';

// interface Props {

// }

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  className?: GenericTableClassNameType;
};

function GenericTable<T, K extends keyof T>({ data, columns, className }: TableProps<T, K>): ReactElement {
  return (
    <div className="overflow-x-auto overflow-y-auto relative h-full text-gray-700">
      <table className="table-auto w-full whitespace-nowrap relative border">
        <TableHeader columns={columns} />
        <TableRows data={data} columns={columns} />
      </table>
    </div>
  );
}

export default GenericTable;
