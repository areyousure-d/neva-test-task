import React from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

import { SelectTime } from "../components/molecules";
import { SubpageTemplate } from "../components/templates";

export const Time = () => {
  const history = useHistory();
  const toast = useToast();

  const ABTime = useSelector((state) => state.timeReducer.ABTime);
  const BATime = useSelector((state) => state.timeReducer.BATime);

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
    history.push("/time/select-quantity/");
  };

  const backOnClick = () => {
    history.push("/time/select-direction");
  };

  if (ABTime !== null && ABTime !== "") {
    statusText = `из А в В в ${ABTime}`;
  }
  if (BATime !== null && BATime !== "") {
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
