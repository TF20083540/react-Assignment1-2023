import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie: tvShow }) => {
  const context = useContext(TVShowsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;