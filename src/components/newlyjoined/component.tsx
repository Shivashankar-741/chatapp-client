import React, { useEffect } from 'react';
import './styles.css';
import userImg from '../../assets/images/userimg.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from 'src/actions/user';
import { RootState } from 'src/reducers';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import { changeUserTab } from 'src/actions/changeUserTab';
import {
  getPersonalNotification,
  updatePersonalNotification,
} from 'src/actions/personalNotifications';

interface IUserType {
  _id: string;
  name: string;
  bio: string;
  email: string;
  photo: string;
  createdAt: string;
  notFound?: boolean;
  _v: number;
}
interface IUserNotification {
  _id: string;
  notificationSenderId: string;
  notificationReceiverId: string;
  notificationCount: Number;
}

interface IUser {
  userId: string;
}

export const Newlyjoined = ({ userId }: IUser) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(userId));
    dispatch(getPersonalNotification());
  }, [userId, dispatch]);

  const users: IUserType[] = useSelector((state: RootState) => state.users);
  const notifications: IUserNotification[] = useSelector(
    (state: RootState) => state.personalNotification
  );

  let notify = notifications.filter((n) => n.notificationReceiverId === userId);
  console.log(notify);

  const clickUser = (user: IUserType) => {
    dispatch(changeUserTab(user));

    // let n = notify.filter((n) => n.notificationSenderId === user._id);
    // if (n.length) {
    //   dispatch(updatePersonalNotification(n[0]._id));
    // }
  };

  return (
    <div className="newlyjoined">
      <h1 className="newlyjoined__title">Chat list</h1>
      <div className="newlyJoined__lists">
        {users.length === 1 && users[0].notFound ? (
          <div>
            <h1>{users[0].name}</h1>
          </div>
        ) : !!users.length ? (
          users.map((user: IUserType) => (
            <div className="newlyJoined__list" onClick={() => clickUser(user)}>
              <div className="newlyJoined__list--left">
                <div className="newlyJoined__list--left-profile">
                  <img
                    className="newlyJoined__list--left-profile-img"
                    src={user.photo || userImg}
                    alt="profile"
                  />
                </div>
                <div className="newlyJoined__list--left-profile-details">
                  <h1 className="newlyJoined__list--left-profile-details-name">{user.name}</h1>
                  <h1 className="newlyJoined__list--left-profile-details-lastmsg">{user.bio}</h1>
                </div>
              </div>
              <div className="newlyJoined__list--right">
                <h5 className="newlyJoined__list--right-lastmsgtime">
                  Joined {''}
                  {moment(user.createdAt).fromNow()}
                </h5>
                {/* <p>{notify?.find((n) => n.notificationSenderId === user._id)?.notificationCount}</p> */}
              </div>
            </div>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};
