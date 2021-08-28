import { ActionTypes } from "src/constants/actionTypes";
import * as api from "../api/index";

export const getAllUsers = () => async (dispatch: any) => {
  try {
    const { data } = await api.getAllUsers();
    console.log(data.allUsers);
    dispatch({ type: ActionTypes.FETCH_ALL, payload: data.allUsers });
  } catch (error) {
    console.log(error);
  }
};
