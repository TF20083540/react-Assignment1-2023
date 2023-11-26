import React, { useEffect, useState } from 'react';
import { getSearchMoviesResults } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
//import searchBar from "../components/searchBar";

const SearchMoviesPage = (props) => {


  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const GetSearchData = async () => {
    let data  = await getSearchMoviesResults(searchTerm);

    

    console.log(data);

    console.log("Movie Data here next? ");
    const movies = data.results;
    console.log(movies);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);

    console.log(GetSearchData());
    console.log("End datamine");




  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchMoviesPage;