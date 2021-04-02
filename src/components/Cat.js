import React, { useContext } from "react";
import { CatContext } from "../contexts/CatContext";

// -------------------MATERIAL UI---------------------
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    position: "relative",
    top: 90,
  },
  media: {
    height: 350,
  },
});

const Cat = ({ cat, handleFavourite }) => {
  const { favouriteCats, handleDeleteFavourite } = useContext(CatContext);
  const classes = useStyles();
  // -----------filter-----------------------------
  // sou dinei ena array with all the matches
  // let existFavourite =
  //   favouriteCats.filter((existingCat) => existingCat.id === cat.id).length > 0;

  // ---------------------find-----------------
  // return the item tha matches
  // let existFavourite = favouriteCats.find((existingCat) => {
  //   if (existingCat.id === cat.id) return true; // se auto me mperdeue oti nomiza automata girizei true eno prepei na kanw return
  // });

  // let existFavourite = !!favouriteCats.find(
  //   (existingCat) => existingCat.id === cat.id // se auto me mperdeue oti nomiza automata girizei true eno prepei na kanw return
  // );

  //opote thelw na girizei true !! epistrefei to true xoris na kanw return

  let favourite = favouriteCats.find(
    (existingCat) => {
      if (existingCat.id === cat.id) return existingCat;
    } // se auto me mperdeue oti nomiza automata girizei true eno prepei na kanw return
    //panta iparxei kati mesa sto object giati trexei mono otan kanw click sto foto  kai mono an ta id tautizonte
  );

  let existFavourite = !!favourite;

  if (existFavourite) {
    for (const [key, value] of Object.entries(existFavourite)) {
      console.log(`${key}: ${value}`);
    }
  }

  // console.log(
  //   `i am cat ${cat.id}and i'm ${existFavourite ? "" : "not"} in favourites`
  // );
  const handleSaveDeleteCats = () =>
    !existFavourite ? handleFavourite(cat) : handleDeleteFavourite(cat);

  return (
    // <div>
    //   <img src={cat.url} alt="Cat" />
    //   <div>
    //     <Button
    //       key={cat.id}
    //       variant="contained"
    //       color={!existFavourite ? "primary" : "secondary"}
    //       onClick={handleSaveDeleteCats}
    //     >
    //       {!existFavourite ? "SAVE" : "UNSAVE"}
    //     </Button>
    //   </div>
    // </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={cat.url} alt="Cat" />
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          key={cat.id}
          variant="contained"
          color={!existFavourite ? "primary" : "secondary"}
          onClick={handleSaveDeleteCats}
        >
          {!existFavourite ? "SAVE" : "UNSAVE"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cat;
