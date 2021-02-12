import {
  SET_QUANTITY,
  SET_DIRECTION,
  SET_AB_TIME,
  SET_BA_TIME,
} from "./action-types";

export const setDirection = (direction) => ({
  type: SET_DIRECTION,
  payload: direction,
});

export const setABTime = (time) => ({
  type: SET_AB_TIME,
  payload: time,
});

export const setBATime = (time) => ({
  type: SET_BA_TIME,
  payload: time,
});

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  payload: Number(quantity),
});
