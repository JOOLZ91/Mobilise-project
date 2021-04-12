import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [user_name, setUser_name] = useState("");
  const [blur, setBlur] = useState(false);
  const [changes, setChanges] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  const validateUser = async (username, password, url) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return { validated: false, message: data.message };
    } else {
      return { validated: true, message: data.message };
    }
  };

  const validateName = (name) => {
    if (name.indexOf(" ") >= 0 || name.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const showError = (isValid, blur) => {
    if (!isValid && (blur || changes)) {
      return true;
    } else {
      return false;
    }
  };

  const handleBlur = (e) => {
    setBlur(true);
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (isValid) {
      const res = await validateUser(
        user_name,
        password,
        `${process.env.REACT_APP_BACKEND_URL}/login`
      );

      if (!res.validated) {
        alert(res.message);
      } else {
        history.push("/products");
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    if (!validateName(e.target.value)) {
      setIsValid(false);
      setChanges(true);
      setUser_name(e.target.value);
    } else {
      setUser_name(e.target.value);
      setIsValid(true);
    }
  };

  return (
    <>
      <Grid>
        <form>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <h2 className={classes.signText}>Sign In</h2>
            </Grid>
            <LockIcon className={classes.lockStyle} />
            <AccountBoxIcon className={classes.userStyle} />
            <TextField
              className={classes.inputStyle}
              label="Enter name/email (no whitespaces)"
              error={showError(isValid, blur)}
              placeholder="Enter username or email address"
              fullWidth
              required
              variant="outlined"
              onChange={handleNameChange}
              value={user_name}
              onBlur={handleBlur}
            />

            <TextField
              className={classes.inputStyle}
              label="Password"
              placeholder="Enter password"
              fullWidth
              required
              variant="outlined"
              type="password"
              onChange={handlePasswordChange}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Keep me signed in"
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btnStyle}
              onClick={handleOnClick}
            >
              Login
            </Button>

            <Typography>
              <Link href="#">I forgot my password</Link>
            </Typography>
            <Typography>
              <Link href="#">Resend verification email</Link>
            </Typography>
          </Paper>
        </form>
      </Grid>
    </>
  );
};

export default Login;
