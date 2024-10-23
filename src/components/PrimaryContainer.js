import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoDetails from "./VideoDetails";
import VideoContainer from "./VideoContainer";
import Header from "./Header";

const PrimaryContainer = () => {
  const listOfMovies = useSelector((store) => store.moviesReducer);

  if (listOfMovies.length === 0) return;
  const Movie = listOfMovies[0];
  console.log(" Movie::: ", Movie);
  

  return (
    <div className="relative h-full w-full">
      <Header/>
      <VideoDetails data={Movie} />
      <VideoContainer data={Movie} />
    </div>
  );
};

export default PrimaryContainer;
