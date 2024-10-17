import useWatchListMovies from "../hooks/WatchListHook";
import Movies from "./Movies";


const BrowseBody = () => {
  const movies = useWatchListMovies();
  return <div>
    <Movies/>
  </div>;
};

export default BrowseBody;
