import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { SignUp } from "pages/SignUp";
import { SignIn } from "pages/SignIn";
import { Main } from "pages/Main";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated: isAuthenticated,
  logout: logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component logout={logout} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  useEffect(() => {}, [isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated ? (
            <Redirect to="/main" />
          ) : (
            <Redirect to="/sign-in" />
          )}
        </Route>
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/main"
          logout={logout}
          component={Main}
        />
        <Route path="/sign-in" exact>
          <SignIn login={login} isAuthenticated={isAuthenticated} />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp login={login} />
        </Route>
        <Route path="*">
          <div>404 Not found </div>
        </Route>
      </Switch>
    </Router>
  );
};
