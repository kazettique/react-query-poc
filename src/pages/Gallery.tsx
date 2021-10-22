import ReactQueryDemo from '@/pages/ReactQueryDemo';
import ReactPortalDemo from '@/pages/ReactPortalDemo';
import { ReactElement } from 'react';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';

// interface Props {

// }

export default function Gallery(): ReactElement {
  const demoList = [
    { to: '/gallery/react-query-demo', Component: ReactQueryDemo, pageName: 'react query demo' },
    { to: '/gallery/react-portal-demo', Component: ReactPortalDemo, pageName: 'react portal demo' },
  ];

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="container mx-auto flex">
        {pathname === '/' &&
          demoList.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="h-32 w-32 bg-green-500 rounded text-gray-900 m-5 p-5 flex justify-center items-center"
            >
              {item.pageName}
            </NavLink>
          ))}
        <Switch>
          {demoList.map((item, index) => (
            <Route key={item.to} strict sensitive path={item.to} component={item.Component} />
          ))}
        </Switch>
      </div>
    </>
  );
}
