import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { CatContext } from "../contexts/CatContext";

// -------------------MATERIAL UI---------------------
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PetsIcon from "@material-ui/icons/Pets";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    textDecoration: "none",
    flexGrow: 1,
    color: "white",
    display: "flex",
  },
  linkStyle: {
    textDecoration: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000000",
    flexGrow: 1,
  },
  navbattons: {
    // "&:hover": {
    //   backgroundColor: "#ffffff",
    //   color: "#000000",
    // },
    marginRight: 30,
    backgroundColor: "#e5e5e5",
    colour: "#e5e5e5",
  },
  icon: {
    fontSize: 50,
    marginRight: 10,
  },
  custombadge: {
    position: "relative",
    right: 25,
    bottom: 15,
    "& .MuiBadge-badge": {
      fontSize: 16,
      // fontWeight: "bold",
    },
  },
});
const Nav = ({}) => {
  const { userName, logout, isLoggedIn } = useContext(AuthContext);
  const { resetAllCats, favouriteCats } = useContext(CatContext);
  const history = useHistory();
  const handleLogout = () => {
    logout();
    resetAllCats();
  };
  const handleLogIn = () => {
    history.push("/login");
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <PetsIcon color="secondary" className={classes.icon} />
          <Typography className={classes.logo} varient="h3">
            <Link className={classes.logo} to="/">
              The Cat API
            </Link>
          </Typography>

          <Typography>
            {isLoggedIn && (
              <>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.navbattons}
                >
                  <Link className={classes.linkStyle} to="/cats">
                    CATS
                  </Link>
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  className={classes.navbattons}
                >
                  <Link className={classes.linkStyle} to="/favourite">
                    FAVOURITE CATS
                  </Link>
                </Button>
                <Badge
                  color="secondary"
                  className={classes.custombadge}
                  badgeContent={favouriteCats.length}
                  style={{ fontSize: "50px" }}
                />
              </>
            )}
            {isLoggedIn ? (
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            ) : (
              <Button variant="contained" size="large" onClick={handleLogIn}>
                Log In
              </Button>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
