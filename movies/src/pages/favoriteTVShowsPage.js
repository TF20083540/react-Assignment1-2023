import React, { useContext } from "react";
import PageTemplate from "../components/templateTVListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTVFavorites from "../components/cardIcons/removeFromTVFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteTVShowPage = () => {
  const {tvFavorites: tvShowIds } = useContext(MoviesContext);
  console.log("Favourites page initialised.");
  console.log(tvShowIds);
  console.log("Stop.");

  // Create an array of queries and run in parallel.
  const favoriteTVShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["TVShow", { id: tvShowId }],
        queryFn: getTVShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTVShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favoriteTVShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)

    return q.data
  });

  const toDo = () => true;

  console.log("Data test type 2");
  console.log(tvShows);
  console.log("Data test end.");

  return (
    <PageTemplate
      title="Favorite TV Shows"
      movies={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTVFavorites tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavoriteTVShowPage;