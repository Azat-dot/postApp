import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPages from '../pages/PostIdPages';
import { publicRoutes, privateRoutes } from './router';

const AppRouter = () => {
  return (
    
      <Routes>

        {privateRoutes.map(route =>
        <Route
          key={route.path}
          element={<route.element/>}
          path={route.path}
          />
          )}
        {publicRoutes.map(route =>
        <Route
          key={route.path}
          element={<route.element/>}
          path={route.path}
          />
          )}
        <Route path="*" element={<Navigate to="/posts" replace />} /> 
      
      </Routes>
   
  );
};

export default AppRouter;
