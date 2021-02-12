import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

import { SelectDirection } from "../components/molecules";
import { SubpageTemplate } from "../components/templates";

export const Direction = () => {
  const toast = useToast();
  const history = useHistory();
  const direction = useSelector((state) => state.timeReducer.direction);

  const nextOnClick = () => {
    if (direction !== "ab" && direction !== "ba" && direction !== "aba") {
      toast({
        title: "Ошибка",
        description: "Вы не выбрали направление",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    history.push("/time/select-time/");
  };

  let directionText = "вы пока ничего не выбрали";
  if (direction === "ab") directionText = "из А в В";
  if (direction === "ba") directionText = "из В в А";
  if (direction === "aba") directionText = "из А в В и обратно в А";

  return (
    <SubpageTemplate
      title="Выберите направление"
      statusText={"Выбранное направление: " + directionText}
      nextOnClick={nextOnClick}
      nextTitle="Далее"
      backOnClick={null}
      backTitle={null}
    >
      <SelectDirection />
    </SubpageTemplate>
  );
};
