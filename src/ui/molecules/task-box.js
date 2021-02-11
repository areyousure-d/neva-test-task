import React from "react";

import { Link } from "react-router-dom";

import { Box, Heading, Text } from "@chakra-ui/react";

const TaskBox = ({ title, children, to }) => {
  return (
    <Box
      m={2}
      p={4}
      w="300px"
      position="relative"
      borderWidth="1px"
      borderRadius="md"
      transition="0.2s"
      bg="gray.200"
      _hover={{ bg: "green.300" }}
    >
      <Heading size="sm">{title}</Heading>
      <Text>{children}</Text>
      <Link
        to={to}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
        }}
      ></Link>
    </Box>
  );
};

export { TaskBox };
