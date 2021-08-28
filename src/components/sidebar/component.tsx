import { Dispatch, ReactElement } from "react";
import "./style.css";
import profileImg from "../../assets/images/Ellipse 1.png";
import { ChatIcon, LogoutIcon, NotificationIcon, SettingsIcon } from "../../icons";
import { useDispatch } from "react-redux";
import { ActionTypes } from "src/constants/actionTypes";

interface IUser {
  setUser: Dispatch<any>;
  photo: string;
}

export const Sidebar = ({ setUser, photo }: IUser): ReactElement => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ActionTypes.LOGOUT });
    setUser(null);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar__profile">
        <li className="sidebar__profile--pic">
          <img className="sidebar__profile--pic-img" src={photo || profileImg} alt="profileimg" />
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
