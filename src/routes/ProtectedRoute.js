import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
