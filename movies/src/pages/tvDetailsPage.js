import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/tvDetails/";
import PageTemplate from "../components/templateTVPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant


const TVShowPage = (props) => {
  const { id } = useParams();
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tv data", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TVDetails tvShow={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default TVShowPage;