import { ActionTypes } from 'src/constants/actionTypes';
import * as api from '../api/index';

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

export const searchUser = (search: string) => (dispatch: any) => {
  dispatch({ type: ActionTypes.SEARCH_USER, payload: { search } });
};

export const cacheUser = () => (dispatch: any) => {
  dispatch({ type: ActionTypes.CACHE_USER });
};
