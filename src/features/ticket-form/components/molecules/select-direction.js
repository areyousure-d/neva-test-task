import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Select } from "@chakra-ui/react";

import { setDirection } from "../../../redux/actions/time-actions";

const SelectDirection = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(setDirection(e.target.value));
  };

  return (
    <Select
      onChange={onChange}
      value={value}
      placeholder="Выберите направление"
    >
      <option value="ab">из A в B</option>
      <option value="ba">из B в A</option>
      <option value="aba">из A в B и обратно в А</option>
    </Select>
  );
};

export { SelectDirection };
