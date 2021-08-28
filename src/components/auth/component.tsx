import { Grid, Button, Container, Paper, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { useStyles } from "./styles";
import AuthInput from "./helper";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";

interface IFormData {
  name: string;
  bio: string;
  email: string;
  password: string;
  passwordConfirm: string;
  photo: string;
}

const Auth = (): ReactElement => {
  // const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    bio: "",
    email: "",
    password: "",
    passwordConfirm: "",
    photo: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState<IFormData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData));
    } else {
      dispatch(login(formData));
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography className={classes.heading}>Welcome to Chatapp</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <AuthInput name="name" label="Name" handleChange={handleChange} autoFocus half />
                <AuthInput name="bio" label="bio" handleChange={handleChange} half />
              </>
            )}
            <AuthInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <AuthInput
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <AuthInput
                name="passwordConfirm"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            {isSignup && (
              <div className={classes.fileInput}>
                <FileBase
                  type="file"
                  accept="jpg"
                  multiple={false}
                  onDone={({ base64 }: any) => setFormData({ ...formData, photo: base64 })}
                />
              </div>
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          {isSignup ? (
            <span className={classes.login}>
              Already have an account?
              <span onClick={switchMode} className={classes.sign}>
                Signin
              </span>
            </span>
          ) : (
            <span className={classes.login}>
              Don't have an account?
              <span onClick={switchMode} className={classes.sign}>
                Signup
              </span>
            </span>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
