import { ActionTypes } from "src/constants/actionTypes";
import * as api from "../api/index";

export const getAllUsers = (userId: string) => async (dispatch: any) => {
  try {
    const { data } = await api.getAllUsers();

    dispatch({
      type: ActionTypes.FETCH_ALL_USER,
      payload: data.allUsers.filter((user: any) => user._id !== userId),
    });
  } catch (error) {
    console.log(error);
  }
};
