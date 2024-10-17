import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./MoviesSlice";

const appStore = configureStore({
  reducer: { userReducer, moviesReducer },
});

export default appStore;
