import { combineReducers } from "redux";
import auth from "./auth";
import users from "./user";
import messages from "./message";
import changeUserTab from "./changeUserTab";
import personalNotification from "./personalNotifications";

export const reducers = combineReducers({
  auth,
  users,
  changeUserTab,
  messages,
  personalNotification,
});

export type RootState = ReturnType<typeof reducers>;
