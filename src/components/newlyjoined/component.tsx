import React, { useEffect } from "react";
import "./styles.css";
import userImg from "../../assets/images/userimg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "src/actions/user";
import { RootState } from "src/reducers";

interface IUserType {
  _id: string;
  name: string;
  email: string;
  photo: string;
  _v: number;
}

interface Iuser {
  userId: string;
}

export const Newlyjoined = ({ userId }: Iuser) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(userId));
  }, [userId, dispatch]);

  let users: IUserType[] = useSelector((state: RootState) => state.users);

  return (
    <div className="newlyjoined">
      <h1 className="newlyjoined__title">Newly joined</h1>
      <div className="newlyJoined__lists">
        {users.map((user: IUserType) => (
          <div className="newlyJoined__list">
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
                <h1 className="newlyJoined__list--left-profile-details-lastmsg">
                  Hi Guys, Wassup!
                </h1>
              </div>
            </div>
            <div className="newlyJoined__list--right">
              <h5 className="newlyJoined__list--right-lastmsgtime">Today, 5.35pm</h5>
            </div>
          </div>
        ))}

        {/* <div className="newlyJoined__list">
          <div className="newlyJoined__list--left">
            <div className="newlyJoined__list--left-profile">
              <img className="newlyJoined__list--left-profile-img" src={img2} alt="profile" />
            </div>
            <div className="newlyJoined__list--left-profile-details">
              <h1 className="newlyJoined__list--left-profile-details-name">Swathi</h1>
              <h1 className="newlyJoined__list--left-profile-details-lastmsg">Hi there!</h1>
            </div>
          </div>
          <div className="newlyJoined__list--right">
            <h5 className="newlyJoined__list--right-lastmsgtime">Today, 2.15pm</h5>
          </div>
        </div>
        <div className="newlyJoined__list">
          <div className="newlyJoined__list--left">
            <div className="newlyJoined__list--left-profile">
              <img className="newlyJoined__list--left-profile-img" src={img1} alt="profile" />
            </div>
            <div className="newlyJoined__list--left-profile-details">
              <h1 className="newlyJoined__list--left-profile-details-name">Swathi</h1>
              <h1 className="newlyJoined__list--left-profile-details-lastmsg">Hi there!</h1>
            </div>
          </div>
          <div className="newlyJoined__list--right">
            <h5 className="newlyJoined__list--right-lastmsgtime">Today, 2.15pm</h5>
          </div>
        </div> */}
      </div>
    </div>
  );
};
