import React from "react";

import { Switch, Route } from "react-router-dom";

import { routes } from "./pages";

export const Routes = () => {
  return (
    <Switch>
      {routes().map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};
