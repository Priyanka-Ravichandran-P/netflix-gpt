import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";

const SecondaryContainer = () => {
  const {nowPlayingMovies, trendingMovies, popularMovies} = useSelector((store) => store.moviesReducer);

  if (!(nowPlayingMovies?.length > 0 || trendingMovies?.length > 0 || popularMovies?.length > 0)) return;

  return (
    <div className="w-full absolute space-y-4 p-4 bg-black">
      <div className="-mt-56">
        <h1 className="font-bold text-white text-2xl">Now Playing Movies</h1>
        <div className="flex overflow-x-auto space-x-2 mt-4 scrollbar-none">
          {nowPlayingMovies?.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-white text-2xl">Top Rated Movies</h1>
        <div className="flex overflow-x-auto space-x-2 scrollbar-none">
          {trendingMovies?.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-white text-2xl">Popular Movies</h1>
        <div className="flex overflow-x-auto space-x-2 scrollbar-none">
          {popularMovies?.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
