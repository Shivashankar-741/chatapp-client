import { ActionTypes } from "src/constants/actionTypes";

interface IActionType {
  type: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    photo: string;
    _v: number;
  };
}

const users = (users = [], action: IActionType) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USER:
      return action.payload;
    default:
      return users;
  }
};

export default users;
