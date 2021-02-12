import React from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

import { SelectTime } from "../components/molecules";
import { SubpageTemplate } from "../components/templates";

export const Time = () => {
  const history = useHistory();
  const toast = useToast();

  const { ABTime, BATime, direction } = useSelector(
    (state) => state.timeReducer
  );

  let statusText = "";

  const nextOnClick = () => {
    if (
      (ABTime === null || ABTime === "") &&
      (BATime === null || BATime === "")
    ) {
      toast({
        title: "Ошибка!",
        description: "Вы не выбрали время",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (direction === "aba") {
      if (ABTime === null || ABTime === "") {
        toast({
          title: "Ошибка!",
          description: "Вы не выбрали время из А в В",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      if (BATime === null || BATime === "") {
        toast({
          title: "Ошибка!",
          description: "Вы не выбрали время из B в A",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    }
    history.push("/time/select-quantity/");
  };

  const backOnClick = () => {
    history.push("/time/select-direction");
  };

  if (
    ABTime !== null &&
    ABTime !== "" &&
    (direction === "ab" || direction === "aba")
  ) {
    statusText = `из А в В в ${ABTime}`;
  }
  if (
    BATime !== null &&
    BATime !== "" &&
    (direction === "ba" || direction === "aba")
  ) {
    statusText += ` из В в А в ${BATime}`;
  }
  if (
    (ABTime === null || ABTime === "") &&
    (BATime === null || BATime === "")
  ) {
    statusText = "вы пока не выбрали время";
  }

  return (
    <SubpageTemplate
      title="Выберите время"
      statusText={statusText}
      nextTitle="Далее"
      nextOnClick={nextOnClick}
      backTitle="Назад"
      backOnClick={backOnClick}
    >
      <SelectTime />
    </SubpageTemplate>
  );
};
