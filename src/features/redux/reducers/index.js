import { combineReducers } from "redux";

import { timeReducer } from "./time-reducer";

export const rootReducer = combineReducers({
  timeReducer,
});
