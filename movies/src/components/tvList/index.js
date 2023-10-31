import React from "react";
import TV from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default TVList;