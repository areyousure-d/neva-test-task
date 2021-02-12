import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "@chakra-ui/react";

import { schedule } from "../../schedule";
import { setABTime, setBATime } from "../../../redux/actions/time-actions";
import { getLocalTime } from "../../../../lib/getLocalTime";

const SelectTime = () => {
  const dispatch = useDispatch();
  const { direction, ABTime, BATime } = useSelector(
    (state) => state.timeReducer
  );

  let ABOptionsValue = [];
  let ABOptions = [];
  let BAOptionsValue = [];
  let BAOptions = [];

  const onChange = (e) => {
    if (direction === "ab" || direction === "aba") {
      dispatch(setABTime(e.target.value));
    }
    if (direction === "ba") {
      dispatch(setBATime(e.target.value));
    }
  };

  const ABOnChange = (e) => {
    dispatch(setABTime(e.target.value));
  };

  const BAOnChange = (e) => {
    dispatch(setBATime(e.target.value));
  };

  if (direction === "ab") {
    ABOptionsValue = schedule.ab.map((time) => getLocalTime(time));
  }
  if (direction === "ba") {
    BAOptionsValue = schedule.ba.map((time) => getLocalTime(time));
  }
  if (direction === "aba") {
    ABOptionsValue = schedule.ab.map((time) => getLocalTime(time));
    if (ABTime) {
      BAOptionsValue = schedule.ba.filter((time) => {
        console.log(
          ">",
          new Date(time).getTime() + 50 * 60 * 1000 >
            +new Date(ABTime).getTime()
        );
        return (
          new Date(time).getTime() - 50 * 60 * 1000 > new Date(ABTime).getTime()
        );
      });
      BAOptionsValue = BAOptionsValue.map((time) => getLocalTime(time));
    }
  }

  ABOptions = ABOptionsValue.map((value) => {
    if (value)
      return (
        <option key={value.getTime()} value={value.toString()}>
          {value.toString()}
        </option>
      );
  });

  BAOptions = BAOptionsValue.map((value) => {
    if (value)
      return (
        <option key={value.getTime()} value={value.toString()}>
          {value.toString()}
        </option>
      );
  });

  return (
    <div>
      <h1>Выберите время отправления</h1>
      <Select
        value={direction !== "ba" ? getLocalTime(ABTime) : getLocalTime(BATime)}
        onChange={onChange}
        placeholder="Выберите время"
      >
        {direction === "ab" && ABOptions}
        {direction === "ba" && BAOptions}
        {direction === "aba" && ABOptions}
      </Select>
      {direction === "aba" && (
        <React.Fragment>
          <h2>Из В в A</h2>
          <Select
            value={getLocalTime(BATime)}
            onChange={BAOnChange}
            placeholder="Выберите время"
          >
            {BAOptions}
          </Select>
        </React.Fragment>
      )}
    </div>
  );
};

export { SelectTime };
