import React from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { TaskBox } from "../../ui";

const HomePage = () => {
  return (
    <Flex height="100vh" pt="15%" direction="column" align="center">
      <Heading size="xl">Тестовое задание</Heading>
      <Flex mt={4} flexWrap="wrap" justifyContent="center">
        <TaskBox title="Задание 1" to="/tickets">
          Билеты на событие
        </TaskBox>
        <TaskBox title="Задание 2" to="/time">
          Время из A в B
        </TaskBox>
      </Flex>
    </Flex>
  );
};

export { HomePage };
