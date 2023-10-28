import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
//Assignment Additions
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/highestAllTimeMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <Routes>
          <Route path ="/reviews/form" element={ <AddMovieReviewPage />} />
          <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          
          <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
          <Route exact path="/movies/top_rated" element={<TopRatedMoviesPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);