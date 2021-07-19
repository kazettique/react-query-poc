import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import fetchPeople from '../api/fetchPeople';

import Person from './Person';

// const fetchPeople = async () => {
//   const res = await fetch('http://swapi.dev/api/people/');
//   return res.json();
// };

function People(): ReactElement {
  // const { data, status } = useQuery('people', fetchPeople);
  const { data, isError, isLoading, isSuccess, status } = useQuery('people', fetchPeople);

  // console.log(`data111: `, data);
  // console.log(`isSuccess: `, isSuccess);
  // console.log('status: ', status);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}
      {isError && <div>Error fetching data</div>}
      {isLoading && <div>Loading data...</div>}
      {/* {isSuccess && (
        <div>
          {data.results.map((person: any) => (
            <Person key={person.name} planet={person} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default People;
