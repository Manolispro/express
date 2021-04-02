import { createContext, useState } from "react";

export const CatContext = createContext();

const CatContextProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [favouriteCats, setFavouriteCats] = useState([]);

  const addFavouriteCat = (cat) => {
    let result = favouriteCats.findIndex(
      (existingCat) => cat.id === existingCat.id
    );
    if (result === -1) {
      setFavouriteCats((prevCats) => [...prevCats, cat]);
    }
  };
  const handleDeleteFavourite = (id) => {
    deleteFavourite(id);
  };

  const deleteFavourite = (cat) => {
    let newList = favouriteCats.filter(
      (existingCat) => cat.id !== existingCat.id
    );
    setFavouriteCats(newList);
  };

  const resetAllCats = () => {
    setCats([]);
    setFavouriteCats([]);
  };

  return (
    <CatContext.Provider
      value={{
        cats,
        setCats,
        favouriteCats,
        setFavouriteCats,
        addFavouriteCat,
        deleteFavourite,
        handleDeleteFavourite,
        resetAllCats,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};

export default CatContextProvider;
