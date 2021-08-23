import { combineReducers, createStore } from "redux";
import { popularMoviesReducer, popularTvReducer } from "./Popular";
const reducers = combineReducers({
  popularMovies: popularMoviesReducer,
  popularTv: popularTvReducer,
});

const store = createStore(reducers);

export default store;
