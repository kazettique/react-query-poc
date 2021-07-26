import React, { ReactElement } from 'react';

type Props = {
  setPage: any;
};

export default function Navbar(props: Props): ReactElement {
  const { setPage } = props;

  return (
    <nav>
      <button type="button" onClick={() => setPage('planets')}>
        Planets
      </button>
      <button type="button" onClick={() => setPage('people')}>
        People
      </button>
    </nav>
  );
}
