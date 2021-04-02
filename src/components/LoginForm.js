import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// -------------------MATERIAL UI---------------------
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";
const useStyles = makeStyles({
  //prosorina gia na vlepw to login
  root: {
    position: "absolute",
    top: 90,
  },
  field: {
    marginTop: 5,
    marginBottom: 5,
  },
  text: {},
});

const LoginForm = ({}) => {
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
    <form className={classes.root} w={1}>
      <div className={classes.text}>
        <div>
          <TextField
            className={classes.field}
            label="User Name"
            variant="outlined"
            color="primary"
            onChange={(e) => setTypeduser(e.target.value)}
            value={typedUser}
          ></TextField>
        </div>
        <div>
          <TextField
            className={classes.field}
            label="Password"
            variant="outlined"
            color="primary"
            onChange={(e) => setTypedpass(e.target.value)}
            value={typedPass}
            type="password"
          ></TextField>
          <Typography variant="caption" display="block" gutterBottom>
            {error !== "" ? <h2>{error}</h2> : ""}
          </Typography>
        </div>
        <div>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={submitHandler}
            type="submit"
          >
            Log In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
