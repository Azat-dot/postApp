import React, {useContext} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './router';
import { AuthContext } from '../context';
import Loader from '../Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }
  return (
    isAuth 
    ?
    <Routes>
        isAuth 
        ? 
        {privateRoutes.map(route =>
                <Route
                  key={route.path}
                  element={<route.element/>}
                  path={route.path}
                  />
                  )}
                <Route path="*" element={<Navigate to="/posts" replace />} /> 
      </Routes>
    :
    <Routes>
        {publicRoutes.map(route =>
        <Route
          key={route.path}
          element={<route.element/>}
          path={route.path}
          />
          )}
        <Route path="*" element={<Navigate to="/login" replace />} /> 
      </Routes>
   
  );
};

export default AppRouter;
