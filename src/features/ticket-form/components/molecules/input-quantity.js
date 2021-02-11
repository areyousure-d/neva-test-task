import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Input } from "@chakra-ui/react";

import { setQuantity } from "../../../redux/actions/time-actions";

const InputQuantity = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(setQuantity(e.target.value));
  };

  return <Input type="number" onChange={onChange} value={value} />;
};

export { InputQuantity };
