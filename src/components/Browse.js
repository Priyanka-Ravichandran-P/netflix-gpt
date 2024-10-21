import React from "react";

import useWatchListMovies from "../hooks/WatchListHook";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const movies = useWatchListMovies();
  console.log(" watch list resposen  ", movies);
  return (
    <div className="relative bg-slate-800 w-full h-full">
      <PrimaryContainer/>
      {/* <SecondaryContainer/> */}
    </div>
  );
};

export default Browse;
