import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

import { InputQuantity } from "../components/molecules";
import { SubpageTemplate } from "../components/templates";

export const Quantity = () => {
  const history = useHistory();
  const toast = useToast();

  const quantity = useSelector((state) => state.timeReducer.quantity);

  const backOnClick = () => {
    history.push("/time/select-time/");
  };

  const nextOnClick = () => {
    if (quantity === null || quantity === 0) {
      toast({
        title: "Ошибка",
        description: "Вы не выбрали количество",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (Number(quantity) < 0) {
      toast({
        title: "Ошибка",
        description: "Количество билетов не может быть отрицательным",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    history.push("/time/result/");
  };

  return (
    <SubpageTemplate
      title="Выберите количество билетов"
      statusText={"Количество билетов: " + Number(quantity)}
      backTitle="Назад"
      backOnClick={backOnClick}
      nextTitle="Рассчитать"
      nextOnClick={nextOnClick}
    >
      <InputQuantity />
    </SubpageTemplate>
  );
};
