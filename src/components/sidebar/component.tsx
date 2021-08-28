import { Dispatch, ReactElement } from "react";
import "./style.css";
import profileImg from "../../assets/images/Ellipse 1.png";
import { ChatIcon, LogoutIcon, NotificationIcon, SettingsIcon } from "../../icons";
import { useDispatch } from "react-redux";
import { ActionTypes } from "src/constants/actionTypes";
import { useEffect } from "react";
import userImg from "../../assets/images/userimg.png";

interface IUser {
  token: string;
  setUser: Dispatch<any>;
  photo: string;
}

export const Sidebar = ({ token, setUser, photo }: IUser): ReactElement => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ActionTypes.LOGOUT });
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      // conditon for logout the user when token expired
      // logout()
    }
  }, [token]);

  return (
    <div className="sidebar">
      <ul className="sidebar__profile">
        <li className="sidebar__profile--pic">
          <img className="sidebar__profile--pic-img" src={photo || userImg} alt="profileimg" />
        </li>
      </ul>
      <ul className="sidebar__route">
        <li className="sidebar__route--icon sidebar__route--chat">
          {/* activeClass */}
          <ChatIcon />
        </li>
        <li className="sidebar__route--icon sidebar__route--notification">
          <NotificationIcon />
        </li>
        <li className="sidebar__route--icon sidebar__route--settings">
          <SettingsIcon />
        </li>
      </ul>
      <ul className="sidebar__logout" onClick={logout}>
        <li className="sidebar__logout--in">
          <LogoutIcon />
        </li>
      </ul>
    </div>
  );
};
