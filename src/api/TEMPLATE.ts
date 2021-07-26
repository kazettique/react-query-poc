import { useQuery, UseQueryResult } from 'react-query';
import getAxiosPromise from './service/getAxiosPromise';
import { QueryKeyEnum } from './enums';
import getReactQueryConfig from './service/reactQueryConfig';

// API constant
const BASE_URL = 'FILL IN YOUR API BASE URL HERE'; // TODO: Edit here
const API_URL = 'FILL IN YOUR API URL'; // TODO: Edit here
const QUERY_KEY = QueryKeyEnum.EXAMPLE; // TODO: Edit here

//  API response data type
// TODO: Edit here
type ExpectedDataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

// TODO: Edit here
function exampleFetcherFunction(id: number): Promise<ExpectedDataType[]> {
  return getAxiosPromise<ExpectedDataType[]>({ url: API_URL, baseURL: BASE_URL, params: { id } }, QUERY_KEY);
}

// TODO: Edit here
// * FETCH FUNCTION 1: For GET method
function useExampleData(id: number): UseQueryResult<ExpectedDataType[], Error> {
  const queryResult = useQuery<ExpectedDataType[], Error>(
    [QUERY_KEY, id],
    () => exampleFetcherFunction(id),
    getReactQueryConfig<ExpectedDataType[], Error>(QUERY_KEY)
  );

  return queryResult;
}

// TODO: Edit here
// * FETCH FUNCTION 2: For POST, PUT, DELETE method

export default useExampleData;
