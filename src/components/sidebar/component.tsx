import { Dispatch, ReactElement, useCallback } from 'react';
import './style.css';
import { LogoutIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { ActionTypes } from 'src/constants/actionTypes';
import { useEffect } from 'react';
import userImg from '../../assets/images/userimg.png';
import decode from 'jwt-decode';

interface IUser {
  token: string;
  setUser: Dispatch<any>;
  photo: string;
}

interface IToken {
  exp: number;
}

export const Sidebar = ({ token, setUser, photo }: IUser): ReactElement => {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({ type: ActionTypes.LOGOUT });
    setUser(null);
  }, [dispatch, setUser]);

  useEffect(() => {
    if (token) {
      // conditon for logout the user when token expired
      const decodedToken: IToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [logout, token]);

  return (
    <div className="sidebar">
      <ul className="sidebar__profile">
        <li className="sidebar__profile--pic">
          <img className="sidebar__profile--pic-img" src={photo || userImg} alt="profileimg" />
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
