import React from "react";

import { Link } from "react-router-dom";
import { Heading, Box, Flex } from "@chakra-ui/react";

import { SelectDirection } from "../components/molecules";

export const Direction = () => {
  return (
    <Box>
      <Heading size="md">Выберите направление</Heading>
      <SelectDirection />
      <Flex justifyContent="space-between">
        <Link to="/time/select-time">Далее</Link>
      </Flex>
    </Box>
  );
};
