import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

//Test

import { useQuery } from "react-query";
import Spinner from '../spinner'
import ActorList from "../actorList";
import { getTVCredits } from "../../api/tmdb-api";
import Grid from "@mui/material/Grid";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {data, error, isLoading, isError } = useQuery(
    ["cast", { id: movie.id }],
    getTVCredits,
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.cast;
  console.log(actors);




  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.number_of_seasons} seasons.`} />
        <Chip icon={<AccessTimeIcon />} label={`${movie.number_of_episodes} episodes.`} />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`First Premiered: ${movie.first_air_date}`} />
      </Paper>

          {/*Countries Exercise (Week 4) */}    
      <Paper component="ul" sx={{...root}}>
      <Chip label={`Production Companies`} color='primary'/>
        {movie.production_companies.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
        </Paper>
        {/*End Countries Exercise (Week 4) */}

        <Typography variant="h5" component="h3">
          Actors
        </Typography>

        
        <Grid container spacing={0} sx={{ padding: "50px" }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: "wrap",}}>
          <ActorList actors={actors}></ActorList>
        </div>
        </Grid>
      
        <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;