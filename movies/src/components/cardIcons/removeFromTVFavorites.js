import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTVFavoritesIcon = ({tvShow }) => {
  const context = useContext(MoviesContext);
    console.log("handler");
    console.log(tvShow);


  const handleRemoveFromTVFavorites = (e) => {
    e.preventDefault();


    context.removeFromTVFavorites(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromTVFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTVFavoritesIcon;