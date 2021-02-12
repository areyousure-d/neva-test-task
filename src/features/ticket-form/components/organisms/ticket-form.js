import React from "react";

import { Box } from "@chakra-ui/react";

import { Router } from "../../router";

const TicketForm = () => {
  return (
    <Box p={4}>
      <h1>Поездка</h1>
      <Router />
    </Box>
  );
};

export { TicketForm };
