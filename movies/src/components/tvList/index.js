import React from "react";
import TV from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ( {tvShows, action }) => {
  console.log(tvShows);
  let tvCards = tvShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} tvShow={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;