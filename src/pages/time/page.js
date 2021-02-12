import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { TicketForm } from "../../features/ticket-form/components/organisms";

const TimePage = () => {
  return (
    <Flex justifyContent="center">
      <Box width="600px" maxWidth="600px">
        <TicketForm />
      </Box>
    </Flex>
  );
};

export { TimePage };
