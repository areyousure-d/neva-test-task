import React from "react";

import { Link } from "react-router-dom";

import { Box, Heading, Flex } from "@chakra-ui/react";

import { SelectTime } from "../components/molecules";

export const Time = () => {
  return (
    <Box>
      <Heading size="md">Выберите время</Heading>
      <SelectTime />
      <Flex justifyContent="space-between">
        <Link to="/time/select-direction">Назад</Link>
        <Link to="/time/select-quantity">Далее</Link>
      </Flex>
    </Box>
  );
};
