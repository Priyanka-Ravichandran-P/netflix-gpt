const ACCOUNT_ID = 11;
export const API_KEY = "4e971535818feb0d98b323306af64c95"
export const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTk3MTUzNTgxOGZlYjBkOThiMzIzMzA2YWY2NGM5NSIsIm5iZiI6MTcyODM5OTY4My4xMjIzMiwic3ViIjoiNjcwNTQ4NGU1NDU0Yjg2MjMzNjlkY2VjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wy2TvNqjXjRUZJc09p9wK1lXypX-GdGp2GLbraUQbuE"
export const MOVIES_WATCHLIST = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3`;
export const OPTIONS = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${AUTH_TOKEN}`,
       'mode': "no-cors"
    }
}