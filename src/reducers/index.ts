import { combineReducers } from "redux";
import auth from "./auth";
import users from "./user";

export const reducers = combineReducers({
  auth,
  users,
});

export type RootState = ReturnType<typeof reducers>;
