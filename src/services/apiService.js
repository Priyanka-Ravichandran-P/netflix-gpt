const ACCOUNT_ID = 11;
export const PROFILE_PICTURE = "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
export const API_KEY = '4e971535818feb0d98b323306af64c95'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://api.themoviedb.org/3';
export const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTk3MTUzNTgxOGZlYjBkOThiMzIzMzA2YWY2NGM5NSIsIm5iZiI6MTcyODM5OTY4My4xMjIzMiwic3ViIjoiNjcwNTQ4NGU1NDU0Yjg2MjMzNjlkY2VjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wy2TvNqjXjRUZJc09p9wK1lXypX-GdGp2GLbraUQbuE'
export const OPTIONS = {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${AUTH_TOKEN}`
  }
}

export const MOVIES_WATCHLIST_ENDPOINT = `${BASE_URL}/discover/movie?page=1`;
export const MOVIES_POPULAR_ENDPOINT = `${BASE_URL}/movie/popular?page=4`;
export const MOVIES_TOP_RATED_ENDPOINT = `${BASE_URL}/movie/upcoming?page=8`;
export const TOP_RATED_MOVIES_WATCHLIST_ENDPOINT = `${BASE_URL}/movie/top_rated?page=1`;
export const MOVIE_DETAILS_ENDPOINT = `${BASE_URL}/movie/`
export const MOVIE_IMAGES_ENDPOINT = `${BASE_URL}/movie`
export const MOVIE_VIDEOS_ENDPOINT = `${BASE_URL}/movie`
export const IMAGE_FILE_PATH = 'https://image.tmdb.org/t/p/w500'