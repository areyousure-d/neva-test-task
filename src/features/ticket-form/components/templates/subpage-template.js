import { React } from "react";

import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";

export const SubpageTemplate = ({
  title,
  statusText,
  children,
  backTitle,
  nextTitle,
  nextOnClick,
  backOnClick,
}) => {
  return (
    <Box>
      <Heading size="md">{title}</Heading>
      <Text mb={2}>{statusText}</Text>
      {children}
      <Flex mt={4} justifyContent="space-between">
        {backTitle && <Button onClick={backOnClick}>{backTitle}</Button>}
        {nextTitle && <Button onClick={nextOnClick}>{nextTitle}</Button>}
      </Flex>
    </Box>
  );
};
