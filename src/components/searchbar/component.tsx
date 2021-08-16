import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import './styles.css';

export const Searchbar = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <input
          type="text"
          className="searchbar__input mainLoginInput"
          placeholder="&#61442;       Search"
        />
      </Grid>
    </Grid>

    // <Grid item xs={12} sm={12} md={5}>
    //   <TextField
    //     name="firstName"
    //     // onChange={formik.handleChange}
    //     variant="outlined"
    //     required
    //     fullWidth
    //     label="First Name"
    //     type="text"
    //     className="searchbar__input mainLoginInput"
    //     // className={classes.outline}
    //     // value={formik.values.firstName}
    //     // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
    //     // helperText={formik.touched.firstName && formik.errors.firstName}
    //   />
    // </Grid>
  );
};
