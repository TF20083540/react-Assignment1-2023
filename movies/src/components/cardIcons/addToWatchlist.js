import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToPlaylistIcon = ({ movie }) => {
  
  
  const context = useContext(MoviesContext);

  const handleAddToMustWatches = (e) => {
    e.preventDefault();
    context.addToMustWatches(movie);
  };
  

  //console.log(movie);

  return (
    <IconButton aria-label="add to To Watch list" onClick={handleAddToMustWatches}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;