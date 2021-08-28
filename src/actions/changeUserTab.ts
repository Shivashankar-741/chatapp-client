import { ActionTypes } from "src/constants/actionTypes";

interface IUserType {
  _id: string;
  name: string;
  bio: string;
  email: string;
  photo: string;
  createdAt: string;
  _v: number;
}

export const changeUserTab = (user: IUserType) => (dispatch: any) => {
  dispatch({ type: ActionTypes.CHANGE_USER_TAB, payload: user });
};
