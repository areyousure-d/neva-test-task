import {
  SET_QUANTITY,
  SET_DIRECTION,
  SET_AB_TIME,
  SET_BA_TIME,
} from "../actions/action-types";

const initialState = {
  direction: null,
  ABTime: null,
  BATime: null,
  quantity: null,
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIRECTION:
      return { ...state, direction: action.payload };
    case SET_AB_TIME:
      return { ...state, ABTime: action.payload };
    case SET_BA_TIME:
      return { ...state, BATime: action.payload };
    case SET_QUANTITY:
      return { ...state, quantity: action.payload };
    default:
      return state;
  }
};
