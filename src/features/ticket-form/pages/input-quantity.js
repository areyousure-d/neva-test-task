import React from "react";

import { Link } from "react-router-dom";

import { Heading, Box, Flex } from "@chakra-ui/react";

import { InputQuantity } from "../components/molecules";

export const Quantity = () => {
  return (
    <Box>
      <Heading size="md">Выберите количество билетов</Heading>
      <InputQuantity />
      <Flex justifyContent="space-between">
        <Link to="/time/select-time">Назад</Link>
        <Link to="/time/result">Рассчитать</Link>
      </Flex>
    </Box>
  );
};
