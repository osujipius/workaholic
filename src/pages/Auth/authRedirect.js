import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AuthRedirectRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? <Navigate to="/about" /> : <Component />}
    />
  );
}

export default AuthRedirectRoute;
