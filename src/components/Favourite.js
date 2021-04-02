import React, { useContext } from "react";
import { CatContext } from "../contexts/CatContext";
import Cat from "./Cat";
// -------------------MATERIAL UI---------------------
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
});

const Favourite = () => {
  const { favouriteCats } = useContext(CatContext);
  const classes = useStyles();
  return (
    // <div>
    //   {favouriteCats.length > 0 ? (
    //     favouriteCats.map((cat) => (
    //       <>
    //         <Cat key={cat.id} cat={cat} />
    //       </>
    //     ))
    //   ) : (
    //     <h1>no favourite cats</h1>
    //   )}
    // </div>

    <Container>
      <Grid container spacing={3}>
        {favouriteCats.length > 0 ? (
          favouriteCats.map((cat) => (
            <Grid item xs={12} md={6}>
              <Cat key={cat.id} cat={cat} />
            </Grid>
          ))
        ) : (
          <div className={classes.root}>
            <div>
              <Typography variant="h3">NO FAVOURITE CATS</Typography>
            </div>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Favourite;
