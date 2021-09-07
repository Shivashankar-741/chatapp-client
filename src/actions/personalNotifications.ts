import { ActionTypes } from 'src/constants/actionTypes';
import * as api from '../api/index';

interface personalNotification {
  notificationSenderId: string;
  notificationReceiverId: string;
}

export const getPersonalNotification = () => async (dispatch: any) => {
  try {
    const { data } = await api.getNotification();

    dispatch({
      type: ActionTypes.FETCH_ALL_PERSONAL_NOTIFICATIONS,
      payload: data.notifications,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postPersonalNotification =
  (personalNotification: personalNotification) => async (dispatch: any) => {
    try {
      const { data } = await api.postNotification(personalNotification);

      dispatch({
        type: ActionTypes.POST_PERSONAL_NOTIFICATION,
        payload: data.createNotification,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updatePersonalNotification = (id: string) => async (dispatch: any) => {
  try {
    const { data } = await api.updateNotification(id);

    dispatch({
      type: ActionTypes.UPDATE_PERSONAL_NOTIFICATION,
      payload: data.updateNotification,
    });
  } catch (error) {
    console.log(error);
  }
};
