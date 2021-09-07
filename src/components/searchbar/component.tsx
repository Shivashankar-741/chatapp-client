import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cacheUser, searchUser } from 'src/actions/user';
import './styles.css';

interface IUser {
  userId: string;
}

export const Searchbar = ({ userId }: IUser) => {
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      dispatch(cacheUser());
    } else {
      dispatch(searchUser(e.target.value));
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <input
          onChange={changeHandler}
          type="text"
          className="searchbar__input mainLoginInput"
          placeholder="&#61442;       Search"
        />
      </Grid>
    </Grid>
  );
};
