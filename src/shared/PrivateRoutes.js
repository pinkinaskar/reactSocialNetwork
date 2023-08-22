import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../services/auth";


const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
