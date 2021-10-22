import ReactQueryDemo from '@/demo/ReactQueryDemo';
import ReactPortalDemo from '@/demo/ReactPortalDemo';
import { ReactElement } from 'react';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';

function Gallery(): ReactElement {
  const demoList = [
    { to: '/gallery/react-query-demo', Component: ReactQueryDemo, pageName: 'react query demo' },
    { to: '/gallery/react-portal-demo', Component: ReactPortalDemo, pageName: 'react portal demo' },
  ];

  const location = useLocation();
  const { pathname } = location;

  const isGalleryPage = pathname === '/gallery/' || pathname === '/';

  return (
    <>
      <div className="container mx-auto">
        <div className="flex w-full">
          {isGalleryPage ? (
            demoList.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="h-32 w-32 bg-green-500 rounded text-gray-900 m-5 p-5 flex justify-center items-center"
              >
                {item.pageName}
              </NavLink>
            ))
          ) : (
            <NavLink
              to="/gallery/"
              className="m-5 text-yellow-300 hover:bg-yellow-300 hover:text-gray-800 duration-300 text-lg"
            >
              Back
            </NavLink>
          )}
        </div>
        <Switch>
          {demoList.map((item, index) => (
            <Route key={item.to} strict sensitive path={item.to} component={item.Component} />
          ))}
        </Switch>
      </div>
    </>
  );
}

export default Gallery;
