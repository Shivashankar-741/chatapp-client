import React, { ReactElement } from 'react';
import './style.css';
import profileImg from '../../assets/images/Ellipse 1.png';
// import { ClosedLoansSVG } from '../../icons';
import img from '../../assets/icons/chat.svg';

export const Sidebar = (): ReactElement => {
  return (
    <div className="sidebar">
      <ul className="sidebar__profile">
        <li className="sidebar__profile--pic">
          <img className="sidebar__profile--pic-img" src={profileImg} alt="profileimg" />
        </li>
      </ul>
      <ul className="sidebar__route">
        <li className="sidebar__route--chat">
          <img src={img} alt="" />
          {/* <ClosedLoansSVG> */}
        </li>
        <li className="sidebar__route--notification">notification</li>
        <li className="sidebar__route--settings">settings</li>
      </ul>
      <ul className="sidebar__logout">
        <li className="sidebar__logout--in">logout</li>
      </ul>
    </div>
  );
};
