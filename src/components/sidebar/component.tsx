import { ReactElement } from 'react';
import './style.css';
import profileImg from '../../assets/images/Ellipse 1.png';
import { ChatIcon, LogoutIcon, NotificationIcon, SettingsIcon } from '../../icons';

export const Sidebar = (): ReactElement => {
  return (
    <div className="sidebar">
      <ul className="sidebar__profile">
        <li className="sidebar__profile--pic">
          <img className="sidebar__profile--pic-img" src={profileImg} alt="profileimg" />
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
      <ul className="sidebar__logout">
        <li className="sidebar__logout--in">
          <LogoutIcon />
        </li>
      </ul>
    </div>
  );
};
