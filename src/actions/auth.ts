import { ActionTypes } from "../constants/actionTypes";
import * as api from "../api/index";

interface IFormData {
  name?: string;
  bio?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  photo?: string;
}

export const login = (formData: IFormData) => async (dispatch: any) => {
  try {
    const { data } = await api.LogIn(formData);

    dispatch({ type: ActionTypes.AUTH, data });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData: IFormData) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: ActionTypes.AUTH, data });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
