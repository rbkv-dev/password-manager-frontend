import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { MainProvider } from "helpers/store";
import { SignUp } from "pages/SignUp";
import { SignIn } from "pages/SignIn";
import { TFA } from "pages/TFA";
import { Main } from "pages/Main";

import { MainContext } from "helpers/store";

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
            <Redirect to={{ pathname: "/sign-in", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export const App = () => {
  const context = useContext(MainContext);
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
  <MainProvider>
    <Router>
      <Switch>
        {/* <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/"
          exact
          logout={logout}
          component={Main}
        /> */}
        <Route path="/sign-in" exact>
          <SignIn login={login}/>
        </Route>
        <Route path="/sign-up" exact>
          <SignUp login={login}/>
        </Route>
        <Route path="/tfa" exact>
          <TFA login={login} />
        </Route>
        <Route path="/" exact>
          <TFA login={login} />
        </Route>
        <Route path="*">
          <div>404 Not found </div>
        </Route>
      </Switch>
    </Router>
  </MainProvider>
  );
};
