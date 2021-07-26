import { ReactElement } from 'react';
import useEmployeeList, { EmployeeDataType } from '@/api/fetchEmployeeList';
// import useEmployeeData from '@/api/fetchEmployeeData';
import GenericTable from '@/components/GenericTable';
import { ColumnDefinitionType } from '@/components/GenericTable/types';

function EmployeeList(): ReactElement {
  const { data: employeeListData, isError, isLoading, isSuccess } = useEmployeeList();
  // const { data: employeeData } = useEmployeeData(1);

  const tableColumns: ColumnDefinitionType<EmployeeDataType, keyof EmployeeDataType>[] = [
    { key: 'id', header: 'id' },
    { key: 'name', header: 'name' },
    { key: 'age', header: 'age' },
    { key: 'gender', header: 'gender' },
    { key: 'email', header: 'email' },
  ];

  return (
    <div className="w-full text-center border border-yellow-300 rounded-md p-5">
      <h1 className="text-yellow-300 text-4xl">Employee List</h1>
      {isError && <div className="text-red-300 capitalize">Error fetching data</div>}
      {isLoading && <div className="text-blue-300 capitalize">Loading data...</div>}
      {isSuccess && employeeListData && (
        <div className="m-8">
          <GenericTable data={employeeListData} columns={tableColumns} />
        </div>
      )}
    </div>
  );
}
export default EmployeeList;
