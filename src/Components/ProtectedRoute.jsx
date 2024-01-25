import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ isSignedIn, children }) {
  const Auth = useSelector((state) => state.auth);
  // console.log(Auth.auth);
  if (!Auth.auth) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
