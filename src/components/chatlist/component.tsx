import React from 'react';
import './styles.css';
import img1 from '../../assets/images/2.png';
import img2 from '../../assets/images/Ellipse 5.png';
import img3 from '../../assets/images/Ellipse 33.png';

export const Chatlist = () => {
  return (
    <div className="chatlist">
      <h1 className="chatlist__title">Chat list</h1>
      <div className="chatlist__lists">
        <div className="chatlist__list">
          <div className="chatlist__list--left">
            <div className="chatlist__list--left-profile">
              <img className="chatlist__list--left-profile-img" src={img1} alt="profile" />
            </div>
            <div className="chatlist__list--left-profile-details">
              <h1 className="chatlist__list--left-profile-details-name">Raghav</h1>
              <h1 className="chatlist__list--left-profile-details-lastmsg">Dinner?</h1>
            </div>
          </div>
          <div className="chatlist__list--right">
            <h5 className="chatlist__list--right-lastmsgtime">Today, 7.38pm</h5>
          </div>
        </div>
      </div>
      <div className="chatlist__lists">
        <div className="chatlist__list">
          <div className="chatlist__list--left">
            <div className="chatlist__list--left-profile">
              <img className="chatlist__list--left-profile-img" src={img2} alt="profile" />
            </div>
            <div className="chatlist__list--left-profile-details">
              <h1 className="chatlist__list--left-profile-details-name">Swathi</h1>
              <h1 className="chatlist__list--left-profile-details-lastmsg">Hi there!</h1>
            </div>
          </div>
          <div className="chatlist__list--right">
            <h5 className="chatlist__list--right-lastmsgtime">yesterday, 6.51pm</h5>
          </div>
        </div>
      </div>
      <div className="chatlist__lists">
        <div className="chatlist__list">
          <div className="chatlist__list--left">
            <div className="chatlist__list--left-profile">
              <img className="chatlist__list--left-profile-img" src={img3} alt="profile" />
            </div>
            <div className="chatlist__list--left-profile-details">
              <h1 className="chatlist__list--left-profile-details-name">Teju</h1>
              <h1 className="chatlist__list--left-profile-details-lastmsg">Hey</h1>
            </div>
          </div>
          <div className="chatlist__list--right">
            <h5 className="chatlist__list--right-lastmsgtime">Today, 9.41pm</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
