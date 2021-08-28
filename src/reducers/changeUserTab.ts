import { ActionTypes } from "src/constants/actionTypes";

interface IActionType {
  type: string;
  payload: {
    _id: string;
    name: string;
    bio: string;
    email: string;
    photo: string;
    createdAt: string;
    _v: number;
  };
}

let initValue = {
  _id: "",
  name: "",
  bio: "",
  email: "",
  photo: "",
  createdAt: "",
  _v: 0,
};

const changeUserTab = (user = initValue, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.CHANGE_USER_TAB:
      return action.payload;
    default:
      return user;
  }
};

export default changeUserTab;
