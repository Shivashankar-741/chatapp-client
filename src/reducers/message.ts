import { ActionTypes } from "src/constants/actionTypes";

interface IActionType {
  type: string;
  payload: {
    _id: string;
    createdAt: string;
    message: string;
    receiverId: string;
    senderId: string;
  };
}

const messages = (messages = [], action: IActionType) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_MESSAGES:
      return action.payload;
    case ActionTypes.POST_MESSAGE:
      return [...messages, action.payload];
    default:
      return messages;
  }
};

export default messages;
