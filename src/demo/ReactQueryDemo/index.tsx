import CreateEmployee from '@/demo/ReactQueryDemo/components/CreateEmployee';
import EmployeeList from '@/demo/ReactQueryDemo/components/EmployeeList';
import { ReactElement } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';

export default function ReactQueryDemo(): ReactElement {
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      <div className="flex justify-center p-3">
        <NavLink
          to="/gallery/react-query-demo/employeeList"
          className="block border-b-4 border-transparent p-2 m-2 text-yellow-300 duration-300 uppercase"
          activeClassName="border-b-4 border-yellow-300"
        >
          Employee List
        </NavLink>
        <NavLink
          to="/gallery/react-query-demo/createEmployee"
          className="block border-b-4 border-transparent p-2 m-2 text-yellow-300 duration-300 uppercase"
          activeClassName="border-b-4 border-yellow-300"
        >
          Create Employee
        </NavLink>
      </div>
      <Switch>
        <Route strict sensitive path="/gallery/react-query-demo/employeeList" component={EmployeeList} />
        <Route strict sensitive path="/gallery/react-query-demo/createEmployee" component={CreateEmployee} />
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
