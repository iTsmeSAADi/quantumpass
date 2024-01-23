import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function LoginProtectedRoute({ isSignedIn, children }) {
  const Auth = useSelector((state) => state.auth);
  if (Auth.auth) {
    return <Navigate to="/screening" replace />;
  }
  return children;
}
export default LoginProtectedRoute;
