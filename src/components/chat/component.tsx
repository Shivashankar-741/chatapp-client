import React from 'react';
import './styles.css';
import img2 from '../../assets/images/Ellipse 33.png';
import { EllipsisIcon } from '../../icons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__profile">
        <div className="chat__profile__left">
          <img className="chat__profile__left-img" src={img2} alt="profile" />
          <h1 className="chat__profile__left-name">Teju</h1>
        </div>
        <div className="chat__profile__right">
          <div className="chat__profile__right-ellipsis">
            <EllipsisIcon />
          </div>
        </div>
      </div>
      <div className="chat__send--msg">
        <input type="text" className="chat__send--msg-input" placeholder="Type a message here" />
      </div>
      <div className="chat__messages">
        <div className="chat__messages--left">
          <h2>Hey there! lorem20</h2>
        </div>
        <div className="chat__messages--left">
          <h2>How are you doing?!</h2>
        </div>
        <div className="chat__messages--right">
          <h2>I'm doing good!</h2>
        </div>
        <div className="chat__messages--right">
          <h2>How about you?</h2>
        </div>
        <div className="chat__messages--left">
          <h2>I'm well</h2>
        </div>
        <div className="chat__messages--left">
          <h2>Can we meet up tomorrow?</h2>
        </div>
        <div className="chat__messages--right">
          <h2>Sure</h2>
        </div>
      </div>
    </div>
  );
};
