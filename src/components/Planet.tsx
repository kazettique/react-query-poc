import React, { ReactElement } from 'react';

type Props = {
  planet: {
    name: string;
    population: string;
    terrain: string;
  };
};

function Planet(props: Props): ReactElement {
  const { planet } = props;

  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
}

export default Planet;
