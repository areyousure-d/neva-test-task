import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Heading, Text } from "@chakra-ui/react";
import { prices } from "../../prices";
import { getLocalTime } from "../../../../lib/getLocalTime";
import { getTime } from "../../../../lib/getTime";

export const Result = () => {
  const dispatch = useDispatch();
  const { direction, quantity, ABTime, BATime } = useSelector(
    (state) => state.timeReducer
  );

  let time = 0;
  let price = prices[direction] * quantity;
  // время отправления из A в В
  let firstStartTime = getTime(ABTime);
  let firstEndDate = getLocalTime(ABTime).getTime() + 50 * 60 * 1000;
  let firstEndTime = getTime(firstEndDate);

  // время отправления из В в А
  let secondStartTime = getTime(BATime);
  let secondEndDate = getLocalTime(BATime).getTime() + 50 * 60 * 1000;
  let secondEndTime = getTime(secondEndDate);

  let directionName = "";
  let ticketRussianWord = "билет";
  if (quantity === 0 || quantity >= 5) ticketRussianWord = "билетов";
  else if (quantity === 1) ticketRussianWord = "билет";
  else if (quantity < 5) ticketRussianWord = "билетa";

  if (direction === "ab") {
    directionName = "из A в B";
    time = 50;
  }
  if (direction === "ba") {
    directionName = "из B в A";
    time = 50;
  }
  if (direction === "aba") {
    directionName = "из A в B и обратно в A";
    time = 100;
  }

  return (
    <React.Fragment>
      <Heading size="md">Результат</Heading>
      <Text>
        Вы выбрали {quantity} {ticketRussianWord} по маршруту {directionName}{" "}
        стоимостью {price} рублей.
      </Text>
      {direction !== "aba" && (
        <Text>
          Теплоход {directionName} отправляется в {firstStartTime}, прибудет в{" "}
          {firstEndTime}.
        </Text>
      )}
      {direction === "aba" && (
        <React.Fragment>
          <Text>
            Теплоход из А в В отправляется в {firstStartTime}, прибудет в{" "}
            {firstEndTime}
          </Text>
          <Text>
            Теплоход из В в А отправлется в {secondStartTime}, прибудет в{" "}
            {secondEndTime}
          </Text>
        </React.Fragment>
      )}
      <Text>
        Общее время в пути {direction === "aba" ? "1 час 40 минут" : "50 минут"}
        .
      </Text>
      <Text>Приятной поездки!</Text>
    </React.Fragment>
  );
};
