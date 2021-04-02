import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// -------------------MATERIAL UI---------------------
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
  },
  content: {
    width: "50vw",
    padding: 10,
  },
});
const Welcome = () => {
  const classes = useStyles();
  const { userName } = useContext(AuthContext);
  return (
    <div className={classes.root}>
      <img
        alt="cat"
        src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg"
      />
      <div className={classes.content}>
        <Typography variant="h3">Welcome {userName}</Typography>
        <Typography variant="h5">
          Visit cats to see nine of them and save your favourite ones in the
          favourite section
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;
