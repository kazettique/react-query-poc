import { ReactElement } from 'react';
import useEmployeeList from '../api/fetchEmployeeList';

// interface Props {

// }

function EmployeeList(): ReactElement {
  const { data, isError, isLoading, isSuccess, status } = useEmployeeList();

  return (
    <div>
      <h1>Employee List</h1>
      {isError && <div>Error fetching data</div>}
      {isLoading && <div>Loading data...</div>}
      {isSuccess && (
        <div>
          {!!data &&
            data.map((employee: any) => (
              <div key={employee.id}>
                <div>name: {employee.name}</div>
                <div>age: {employee.age}</div>
                <div>gender: {employee.gender}</div>
                <div>email: {employee.email}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
export default EmployeeList;
