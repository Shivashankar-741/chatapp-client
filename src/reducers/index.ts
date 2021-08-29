import { combineReducers } from "redux";
import auth from "./auth";
import users from "./user";
import messages from "./message";
import changeUserTab from "./changeUserTab";

export const reducers = combineReducers({
  auth,
  users,
  changeUserTab,
  messages,
});

export type RootState = ReturnType<typeof reducers>;
