import { useQuery, UseQueryResult, QueryFunction, QueryKey, UseQueryOptions } from 'react-query';
import { AxiosPromise } from 'axios';
import getAxiosPromise from './service';
import { QueryKeyEnum } from './enums';

const BASE_URL = 'http://localhost:5000';
const API_URL = '/employee/';

// type ResponseDateType = {};

const reactQueryConfig: UseQueryOptions = {
  onSuccess: () => {},
  onError: () => {},
};

type EmployeeDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

function fetchEmployeeList(): AxiosPromise<EmployeeDataType> {
  return getAxiosPromise({ url: API_URL, baseURL: BASE_URL }, QueryKeyEnum.EMPLOYEE_LIST);
}

// todo: remove any
function useEmployeeList(): any {
  const queryResult = useQuery(QueryKeyEnum.EMPLOYEE_LIST, fetchEmployeeList, {
    // onSuccess: () => {},
    // onError: (error) => {
    //   // console.log('error123: ', error);
    // },
  });

  return queryResult;
}

export default useEmployeeList;
