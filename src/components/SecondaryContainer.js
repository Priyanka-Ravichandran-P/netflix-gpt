import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";

const SecondaryContainer = () => {
  const listOfMovies = useSelector((store) => store.moviesReducer);

  if (!listOfMovies || listOfMovies?.length === 0) return;

  return (
    <div className="m-4 p-4 flex flex-wrap">
      {listOfMovies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default SecondaryContainer;
