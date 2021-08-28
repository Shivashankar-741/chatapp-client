import React, { useEffect } from "react";
import "./styles.css";
import userImg from "../../assets/images/userimg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "src/actions/user";
import { RootState } from "src/reducers";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";
import { changeUserTab } from "src/actions/changeUserTab";

interface IUserType {
  _id: string;
  name: string;
  bio: string;
  email: string;
  photo: string;
  createdAt: string;
  _v: number;
}

interface IUser {
  userId: string;
}

export const Newlyjoined = ({ userId }: IUser) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(userId));
  }, [userId, dispatch]);

  let users: IUserType[] = useSelector((state: RootState) => state.users);

  const clickUser = (user: IUserType) => {
    dispatch(changeUserTab(user));
  };

  return (
    <div className="newlyjoined">
      <h1 className="newlyjoined__title">Newly joined</h1>
      <div className="newlyJoined__lists">
        {!!users.length ? (
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
                  Joined {""}
                  {moment(user.createdAt).fromNow()}
                </h5>
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
