import React from 'react';
import './styles.css';
import img2 from '../../assets/images/Ellipse 33.png';
import { EllipsisIcon } from '../../icons';

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__profile">
        <div className="chat__profile__left">
          <img className="chat__profile__left-img" src={img2} alt="profile" />
          <h1 className="chat__profile__left-name">Swathi</h1>
        </div>
        <div className="chat__profile__right">
          <div className="chat__profile__right-ellipsis">
            <EllipsisIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
