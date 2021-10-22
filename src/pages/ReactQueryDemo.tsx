import CreateEmployee from '@/components/CreateEmployee';
import EmployeeList from '@/components/EmployeeList';
import { ReactElement } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NavLink, Route, Switch } from 'react-router-dom';

export default function ReactQueryDemo(): ReactElement {
  return (
    <>
      <div className="flex justify-center p-3">
        <NavLink
          to="/employeeList"
          className="block border-b-4 border-transparent p-2 m-2 text-yellow-300 duration-300 uppercase"
          activeClassName="border-b-4 border-yellow-300"
        >
          Employee List
        </NavLink>
        <NavLink
          to="/createEmployee"
          className="block border-b-4 border-transparent p-2 m-2 text-yellow-300 duration-300 uppercase"
          activeClassName="border-b-4 border-yellow-300"
        >
          Create Employesse
        </NavLink>
      </div>
      <Switch>
        <Route strict sensitive path="/employeeList" component={EmployeeList} />
        <Route strict sensitive path="/createEmployee" component={CreateEmployee} />
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
