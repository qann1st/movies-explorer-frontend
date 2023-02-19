import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateOutlet;
