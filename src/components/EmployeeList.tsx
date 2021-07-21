import { ReactElement } from 'react';
import useEmployeeList from '../api/fetchEmployeeList';
import useEmployeeData from '../api/fetchEmployeeData';

function EmployeeList(): ReactElement {
  const { data: employeeListData, isError, isLoading, isSuccess, status } = useEmployeeList();
  const { data: employeeData } = useEmployeeData(1);

  console.log(`employeeListData: `, employeeListData);
  console.log(`employeeData: `, employeeData);

  return (
    <div>
      <h1>Employee List</h1>
      {isError && <div>Error fetching data</div>}
      {isLoading && <div>Loading data...</div>}
      {isSuccess && employeeListData && (
        <div>
          {employeeListData.map((employee) => (
            <div key={employee.id}>
              <div>name: {employee.name}</div>
              <div>age: {employee.age}</div>
              <div>gender: {employee.gender}</div>
              <div>email: {employee.email}</div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default EmployeeList;
