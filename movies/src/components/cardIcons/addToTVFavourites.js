import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTVFavoritesIcon = ({ movie: tvShow }) => {
  const context = useContext(MoviesContext);

  const handleAddToTVFavorites = (e) => {
    e.preventDefault();
    context.addToTVFavorites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTVFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTVFavoritesIcon;