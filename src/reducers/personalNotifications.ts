import { ActionTypes } from 'src/constants/actionTypes';

interface IActionType {
  type: string;
  payload: {
    _id: string;
    notificationSenderId: string;
    notificationReceiverId: string;
    notificationCount: Number;
  };
}

interface IPersonalNotificationType {
  _id: string;
  notificationSenderId: string;
  notificationReceiverId: string;
  notificationCount: Number;
}

const personalNotification = (
  personalNotification: IPersonalNotificationType[] = [],
  action: IActionType
) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_PERSONAL_NOTIFICATIONS:
      return action.payload;
    case ActionTypes.POST_PERSONAL_NOTIFICATION:
      let notification = personalNotification.filter((p) => p._id === action.payload._id);
      return [...notification, action.payload];
    case ActionTypes.UPDATE_PERSONAL_NOTIFICATION:
      let updateNotification = personalNotification.filter((p) => p._id === action.payload._id);
      return [...updateNotification, action.payload];
    default:
      return personalNotification;
  }
};

export default personalNotification;
