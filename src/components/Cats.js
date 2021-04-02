import React, { useState, useContext } from "react";
import { CatContext } from "../contexts/CatContext";
import Cat from "./Cat";

// -------------------MATERIAL UI---------------------
import { Container, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    position: "relative",
    top: 90,
  },
});

const Cats = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const {
    cats,
    setCats,
    favouriteCats,
    setFavouriteCats,
    addFavouriteCat,
    deleteFavourite,
    handleDeleteFavourite,
  } = useContext(CatContext);

  const FetchData = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search?limit=9", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "64edff98-7cfc-477b-9519-aaa3bebf78b6", //logika na apothikeutei se env me onoma..
      },
    })
      .then((response) => response.json())
      .then((cats) => {
        setLoading(false);
        setCats(cats);
        console.log(cats);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  React.useEffect(() => {
    cats.length === 0 && FetchData();
  }, []);

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }
  const handleFavourite = (cat) => {
    addFavouriteCat(cat);
  };
  // const handleDeleteFavourite = (id) => {
  //   deleteFavourite(id);
  // };

  return (
    <Container>
      <Grid container spacing={3}>
        {cats.map((element) => (
          <Grid item xs={12} md={6}>
            <Cat
              handleFavourite={handleFavourite}
              //handleDeleteFavourite={handleDeleteFavourite}
              key={element.id}
              cat={element}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cats;
