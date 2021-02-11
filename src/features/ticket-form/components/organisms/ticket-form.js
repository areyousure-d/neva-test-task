import React from "react";

import { Route, Switch } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import { Quantity, Time, Direction, Result } from "../../pages";

const TicketForm = () => {
  return (
    <Box p={4}>
      <h1>Поездка</h1>
      <Switch>
        <Route path="/time/select-direction" exact component={Direction} />
        <Route path="/time/select-time" component={Time} />
        <Route path="/time/select-quantity" component={Quantity} />
        <Route path="/time/result" component={Result} />
        <Route exact path="/time/" component={Direction} />
      </Switch>
    </Box>
  );
};

export { TicketForm };
