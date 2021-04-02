import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
// -------------------MATERIAL UI---------------------

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://static.wixstatic.com/media/a3261e_d1b7e550f5134dfa805b6401811c4c53~mv2.jpg/v1/fill/w_552,h_292,al_c,q_80,usm_0.66_1.00_0.01/Black%20cat%20is%20isolated%20a%20black%20background.webp)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const { setPassword, setUsername, userName, PassWord } = useContext(
    AuthContext
  );
  const [typedUser, setTypeduser] = useState("");
  const [typedPass, setTypedpass] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (typedPass !== "" && typedUser !== "") {
      setUsername(typedUser);
      setPassword(typedPass);
      setError("");
      history.push("/welcome");
    } else {
      setError("all the fields are required");
    }
  };
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              fullWidth
              label="User Name"
              variant="outlined"
              color="primary"
              onChange={(e) => setTypeduser(e.target.value)}
              value={typedUser}
            />
            <TextField
              margin="normal"
              fullWidth
              className={classes.field}
              label="Password"
              variant="outlined"
              color="primary"
              onChange={(e) => setTypedpass(e.target.value)}
              value={typedPass}
              type="password"
            />

            <Button
              onClick={submitHandler}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
