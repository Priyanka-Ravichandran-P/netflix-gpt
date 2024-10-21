import { useEffect } from "react";
import {
  MOVIE_IMAGES_ENDPOINT,
  MOVIES_WATCHLIST_ENDPOINT,
  OPTIONS,
  MOVIE_VIDEOS_ENDPOINT,
  API_KEY,
  IMAGE_FILE_PATH,
} from "../services/apiService";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux-utils/MoviesSlice";

const TOP_RATED_THRESHOLD = 7.5;
const RECENTLY_ADDED_MOVIE_THRESHOLD_IN_DAYS = 90;

const useWatchListMovies = async () => {
  const dispatch = useDispatch();

  const calculateRecentlyAdded = (movie) => {
    try {
      const releaseDate = movie?.release_date;
      if (!releaseDate) return false;

      const today = new Date();
      const pastDate = new Date(releaseDate);
      const differenceInMilliSeconds = today - pastDate;
      const differenceInDays = Math.floor(
        differenceInMilliSeconds / (1000 * 60 * 60 * 24)
      );
      return differenceInDays <= RECENTLY_ADDED_MOVIE_THRESHOLD_IN_DAYS
        ? true
        : false;
    } catch (err) {
      console.error(" Error in Recently Added::: ", err);
      return false;
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${MOVIES_WATCHLIST_ENDPOINT}?api_key=${API_KEY}`,
        OPTIONS
      );
      let movies = await response.json();

      movies = movies?.results;
      const listOfMovies = [];
      for (let i = 0; i < movies?.length; i++) {
        const movie = movies[i];
        const isTopRated = movie?.vote_average >= TOP_RATED_THRESHOLD ? true : false;
        const isRecentlyAdded = calculateRecentlyAdded(movie);
        listOfMovies.push({
          id: movie.id,
          title: movie.original_title,
          description: movie.overview,
          imgURL: `${IMAGE_FILE_PATH}${movie.poster_path}`,
          videoURL: await fetchMovieVideos(movie),
          isTopRated,
          isRecentlyAdded,
        });

      }
      dispatch(addMovies(listOfMovies));
    } catch (error) {
      console.error(" Error: ", error);
    }
  };

  const fetchMovieImages = async (movie) => {
    try {
      const MOVIE_ID = movie?.id;
      const MOVIE_IMAGE_API = `${MOVIE_IMAGES_ENDPOINT}/${MOVIE_ID}/images?api_key=${API_KEY}`;
      const response = await fetch(MOVIE_IMAGE_API, OPTIONS);
      const data = await response.json();
      console.log(" data: ", data);
    } catch (error) {
      console.error(" Error: ", error);
    }
  };

  const fetchMovieVideos = async (movie) => {
    try {
        const MOVIE_ID = movie?.id;
        const MOVIE_VIDEO_API = `${MOVIE_VIDEOS_ENDPOINT}/${MOVIE_ID}/videos?api_key=${API_KEY}`;
        const response = await fetch(MOVIE_VIDEO_API, OPTIONS);
        const data = await response.json();
        const trailerMovie = data?.results?.filter(obj => obj.type === "Teaser" && obj.site === "YouTube") || data?.results?.[0];
        return trailerMovie.key;
    } catch (error) {
      console.error(" Error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useWatchListMovies;
