import { ActionTypes } from "src/constants/actionTypes";
import * as api from "../api/index";

interface IPostMessageType {
  senderId: string;
  receiverId: string;
  message: string;
}

export const getAllMessages = () => async (dispatch: any) => {
  try {
    const { data } = await api.getAllMessages();

    dispatch({
      type: ActionTypes.FETCH_ALL_MESSAGES,
      payload: data.getAllMessages,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postMessage = (message: IPostMessageType) => async (dispatch: any) => {
  try {
    const { data } = await api.postMessageData(message);

    dispatch({
      type: ActionTypes.POST_MESSAGE,
      payload: data.createMessage,
    });
  } catch (error) {
    console.log(error);
  }
};
