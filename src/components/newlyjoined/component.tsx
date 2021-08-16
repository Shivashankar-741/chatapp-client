import { Grid } from '@material-ui/core';
import React from 'react';
import './styles.css';
import img1 from '../../assets/images/Ellipse 2.png';

export const Newlyjoined = () => {
  return (
    <div className="newlyjoined">
      <h1 className="newlyjoined__title">Groups</h1>
      <div className="newlyJoined__lists">
        <div className="newlyJoined__list">
          <div className="newlyJoined__list--left">
            <div className="newlyJoined__list--left-profile">
              <img className="newlyJoined__list--left-profile-img" src={img1} alt="profile" />
            </div>
            <div className="newlyJoined__list--left-profile-details">
              <h1 className="newlyJoined__list--left-profile-details-name">Raghav</h1>
              <h1 className="newlyJoined__list--left-profile-details-lastmsg">Hi Guys, Wassup!</h1>
            </div>
          </div>
          <div className="newlyJoined__list--right">
            <h5 className="newlyJoined__list--right-lastmsgtime">Today, 5.35pm</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
