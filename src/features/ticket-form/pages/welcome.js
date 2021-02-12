import React from "react";
import { Link } from "react-router-dom";

import { Heading, Text } from "@chakra-ui/react";

export const WelcomePage = () => {
  return (
    <React.Fragment>
      <Heading>Добро пожаловать!</Heading>
      <Text mb="40px">
        Здесь вы можете приобрести билеты из пункта А в пункт В, из А в В, из А
        в В и обратно
      </Text>
      <Link
        style={{
          borderRadius: "5px",
          padding: "15px",
          backgroundColor: "#dadada",
        }}
        to="/time/select-direction/"
      >
        Приступить к покупке билетов
      </Link>
    </React.Fragment>
  );
};
