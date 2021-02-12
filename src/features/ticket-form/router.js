import React from "react";

import { Switch, Route } from "react-router-dom";

import { routes } from "./pages";

export const Router = () => {
  return (
    <Switch>
      {routes().map(({ path, exact, component }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  );
};
