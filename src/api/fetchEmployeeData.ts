import { useQuery, UseQueryResult } from 'react-query';
import getAxiosPromise from './service/getAxiosPromise';
import { QueryKeyEnum } from './enums';
import getReactQueryConfig from './service/reactQueryConfig';

// API constant
const BASE_URL = 'http://localhost:5000';
const API_URL = '/employee/';
const QUERY_KEY = QueryKeyEnum.EMPLOYEE_DATA;

//  API response data type
type EmployeeDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

function fetchEmployeeData(id: number): Promise<EmployeeDataType[]> {
  return getAxiosPromise<EmployeeDataType[]>({ url: API_URL, baseURL: BASE_URL, params: { id } }, QUERY_KEY);
}

function useEmployeeData(id: number): UseQueryResult<EmployeeDataType[], Error> {
  const queryResult = useQuery<EmployeeDataType[], Error>(
    [QUERY_KEY, id],
    () => fetchEmployeeData(id),
    getReactQueryConfig<EmployeeDataType[], Error>(QUERY_KEY)
  );

  return queryResult;
}

export default useEmployeeData;
