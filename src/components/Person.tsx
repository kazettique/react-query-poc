import React, { ReactElement } from 'react';

type Props = {
  planet: {
    name: string;
    gender: string;
    birth_year: string;
  };
};

function Person(props: Props): ReactElement {
  const { planet } = props;

  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Gender - {planet.gender}</p>
      <p>Birth Year - {planet.birth_year}</p>
    </div>
  );
}

export default Person;
