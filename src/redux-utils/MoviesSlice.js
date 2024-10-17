import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "watchlistMovies",
  initialState: {
    movies : []
  },
  reducers : {
    addMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
