import { useQuery, UseQueryResult } from 'react-query';
import getAxiosPromise from './service/getAxiosPromise';
import { QueryKeyEnum } from './enums';
import getReactQueryConfig from './service/reactQueryConfig';

// API constant
const BASE_URL = 'http://localhost:5000';
const API_URL = '/employee/';
const QUERY_KEY = QueryKeyEnum.EMPLOYEE_LIST;

//  API response data type
export type EmployeeDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

function fetchEmployeeList(): Promise<EmployeeDataType[]> {
  return getAxiosPromise<EmployeeDataType[]>({ url: API_URL, baseURL: BASE_URL }, QUERY_KEY);
}

function useEmployeeList(): UseQueryResult<EmployeeDataType[], Error> {
  const queryResult = useQuery<EmployeeDataType[], Error>(
    QUERY_KEY,
    fetchEmployeeList,
    getReactQueryConfig<EmployeeDataType[], Error>(QUERY_KEY)
  );

  return queryResult;
}

export default useEmployeeList;
