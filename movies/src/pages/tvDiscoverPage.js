import React from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToTVFavoritesIcon from "../components/cardIcons/addToTVFavourites";

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tv discover', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover TV Shows"
      movies={movies}
      action={(movie) => {
        return <AddToTVFavoritesIcon movie={movie} />
      }}
    />
);
};
export default HomePage;