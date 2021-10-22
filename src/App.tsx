import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Gallery from './pages/Gallery';

function App(): ReactElement {
  const galleryList = [
    { to: '/gallery', Component: Gallery },
    { to: '/', Component: Gallery },
  ];

  return (
    <div className="bg-gray-800 text-gray-300 h-screen w-screen overflow-scroll">
      <Switch>
        {galleryList.map((item, index) => (
          <Route key={item.to} strict sensitive path={item.to} component={item.Component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
