import { notification } from 'antd';

export const sendError = (err: string) => {
  console.log(err);

  return notification.error({ message: err });
};
