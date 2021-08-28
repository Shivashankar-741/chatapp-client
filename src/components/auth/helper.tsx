import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface IAuthInput {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword?: () => void;
  half?: boolean;
  autoFocus?: boolean;
  type?: string;
}

const AuthInput = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}: IAuthInput) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password" ? (
          {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        ) : (
          <></>
        )
      }
    />
  </Grid>
);

export default AuthInput;
