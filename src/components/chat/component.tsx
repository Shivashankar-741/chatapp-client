import React, { ReactNode, useEffect } from 'react';
import './styles.css';
import img2 from '../../assets/images/userimg.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import { useState } from 'react';
import { getAllMessages, postMessage } from 'src/actions/messages';

interface ISenderType {
  senderId: string;
}

interface IMessageType {
  createdAt: string;
  message: string;
  receiverId: string;
  senderId: string;
  _id: string;
}

export const Chat = ({ senderId }: ISenderType) => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  let user = useSelector((state: RootState) => state.changeUserTab);
  let messages: IMessageType[] = useSelector((state: RootState) => state.messages);
  // console.log(user);
  // console.log(messages);

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message !== '') {
      console.log(message);
      dispatch(postMessage({ senderId, receiverId: user._id, message }));
      // dispatch(
      //   postPersonalNotification({
      //     notificationSenderId: senderId,
      //     notificationReceiverId: user._id,
      //   })
      // );
      setMessage('');
    }
  };

  const renderMessage = (
    message: IMessageType,
    senderId: string,
    receiverId: string
  ): ReactNode => {
    if (message.senderId === senderId && message.receiverId === receiverId) {
      return (
        <div className="chat__messages--right">
          <h2>{message.message}</h2>
        </div>
      );
    } else if (message.senderId === receiverId && message.receiverId === senderId) {
      return (
        <div className="chat__messages--left">
          <h2>{message.message}</h2>
        </div>
      );
    }
  };

  return (
    <div className="chat">
      <div className="chat__profile">
        <div className="chat__profile__left">
          <img className="chat__profile__left-img" src={user.photo || img2} alt="profile" />
          <h1 className="chat__profile__left-name">{user.name || 'Teju'}</h1>
        </div>
        {/* <div className="chat__profile__right">
          <div className="chat__profile__right-ellipsis">
            <EllipsisIcon />
          </div>
        </div> */}
      </div>

      <div className="chat__messages">
        {messages.map((message) => renderMessage(message, senderId, user._id))}
      </div>
      <div className="chat__send--msg">
        <input
          onKeyPress={keyPressHandler}
          onChange={changeHandler}
          value={message}
          type="text"
          className="chat__send--msg-input"
          placeholder="Type a message here"
        />
      </div>
    </div>
  );
};
