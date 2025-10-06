import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if(loading) {
    return <div>Doi 1 xiu cho no Loading...😤😤😤</div>
  }
  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
export default PrivateRoute;
