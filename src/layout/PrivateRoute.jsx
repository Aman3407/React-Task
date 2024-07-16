import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context/context';



const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const {setIsAuthenticated} = useGlobalContext();
  if(token) setIsAuthenticated(true);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
