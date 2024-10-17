import { useEffect } from "react";
import { MOVIES_WATCHLIST, OPTIONS } from "../services/apiService";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux-utils/MoviesSlice";

const useWatchListMovies = async () => {
    const dispatch = useDispatch();

  const fetchMovies = async () => {
    try{
      const response  = await fetch(MOVIES_WATCHLIST, OPTIONS);
      const movies = await response.json();
      dispatch(addMovies({movies}));
    }catch(error){
      console.error(" Error: ", error);
    }   
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useWatchListMovies;
