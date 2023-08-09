import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { router } from './config/router/router';

const RootRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route, idx) => {
          return <Route key={idx} path={route.path} element={route.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
