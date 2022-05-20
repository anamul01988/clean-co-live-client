import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const user = true;

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />; //nested route gula aikhane render hobe. outlet dewate children use hoilo nah ,, kaj gula aro easy hoilo
}; 

export default PrivateRoute;
