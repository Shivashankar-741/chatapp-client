import { ActionTypes } from "../constants/actionTypes";

interface IAction {
  type: string;
  data: {};
}

const authReducer = (state = { authData: null }, action: IAction) => {
  switch (action.type) {
    case ActionTypes.AUTH:
      localStorage.setItem("chatapp", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case ActionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
