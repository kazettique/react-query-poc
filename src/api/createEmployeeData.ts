import { useMutation, UseMutationResult } from 'react-query';
import getAxiosPromise from './service/getAxiosPromise';
import { QueryKeyEnum } from './enums';
import getReactQueryConfig from './service/reactQueryConfig';

// API constant
const BASE_URL = 'http://localhost:5000';
const API_URL = '/employee/';
const QUERY_KEY = QueryKeyEnum.NEW_EMPLOYEE;

//  API response data type
type EmployeeDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

function createEmployeeData(newEmployeeData: EmployeeDataType): Promise<EmployeeDataType> {
  return getAxiosPromise<EmployeeDataType>(
    {
      url: API_URL,
      baseURL: BASE_URL,
      data: newEmployeeData,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
    QUERY_KEY
  );
}

function useCreateEmployeeData(): UseMutationResult<EmployeeDataType, Error, EmployeeDataType> {
  const mutation = useMutation<EmployeeDataType, Error, EmployeeDataType>(
    (newEmployeeData) => createEmployeeData(newEmployeeData),
    getReactQueryConfig<EmployeeDataType, Error>(QUERY_KEY)
  );

  return mutation;
}

export default useCreateEmployeeData;
