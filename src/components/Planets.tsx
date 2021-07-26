import React, { ReactElement, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import Planet from './Planet';

// interface Props {

// }

const fetchPlanets = async (key: any) => {
  // console.log('key: ', key);
  const response: AxiosResponse = await axios.get(`http://swapi.dev/api/planets/?page=${key.queryKey[1]}`);
  // console.log('response: ', response);
  return response.data;
};

// * NOTE
// interface IPerson {
//   id: string;
//   name: string;
//   age: number;
// }

// * NOTE
// const fetchPerson = async (): Promise<IPerson> => {
//   const res = await fetch('/api/person');
//   if (res.ok) {
//     return res.json();
//   }

//   throw new Error('error');
// };

function Planets(): ReactElement {
  const [page, setPage] = useState(1);

  // 1st param: query key
  // 2nd param:
  const { data, status } = useQuery(['planets', page], fetchPlanets, {
    // staleTime: 0,
    // cacheTime: 10,
    // onSuccess: () => console.log('react-query: data fetched with no problemo'),
    // onError: () => console.error('react-query: data fetched with error!!'),
  });

  // * NOTES
  // const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
  //   'person',
  //   fetchPerson
  // );

  return (
    <div>
      <h2>Planets</h2>
      <button type="button" onClick={() => setPage(1)}>
        page 1
      </button>
      <button type="button" onClick={() => setPage(2)}>
        page 2
      </button>
      <button type="button" onClick={() => setPage(3)}>
        page 3
      </button>
      {/* <p>{status}</p> */}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet: any) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
