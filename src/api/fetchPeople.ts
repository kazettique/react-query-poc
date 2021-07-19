import { AxiosPromise } from 'axios';
import getAxiosPromise from './service';

const API_URL = '/people/';
const BASE_URL = 'http://swapi.dev/api/';

function fetchPeopleList(): AxiosPromise {
  return getAxiosPromise({ url: API_URL, baseURL: BASE_URL }, 'FETCH_PEOPLE_LIST');
}

export default fetchPeopleList;
