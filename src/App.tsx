import { ReactElement, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, Route, NavLink } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

function App(): ReactElement {
  return (
    <div className="bg-gray-800 text-gray-300 h-screen w-screen overflow-scroll">
      <div className="container mx-auto">
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
            Create Employee
          </NavLink>
        </div>
        <Switch>
          <Route strict sensitive path="/employeeList" component={EmployeeList} />
          <Route strict sensitive path="/createEmployee" component={CreateEmployee} />
        </Switch>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
