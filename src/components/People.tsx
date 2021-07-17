import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';

import Person from './Person';

// interface Props {

// }

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
};

function People(): ReactElement {
  const { data, status } = useQuery('people', fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person: any) => (
            <Person key={person.name} planet={person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
