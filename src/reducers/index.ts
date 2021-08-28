import { combineReducers } from "redux";
import auth from "./auth";
import users from "./user";
import changeUserTab from "./changeUserTab";

export const reducers = combineReducers({
  auth,
  users,
  changeUserTab,
});

export type RootState = ReturnType<typeof reducers>;
