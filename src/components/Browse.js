import React from "react";

import useWatchListMovies from "../hooks/WatchListHook";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useWatchListMovies();

  return (
    <div className="relative w-full h-full">
        <PrimaryContainer />
        <SecondaryContainer />
    </div>
  );
};

export default Browse;
