import { combineReducers, createStore } from "redux";
import { popularMoviesReducer } from "./Popular";
const reducers = combineReducers({
  popularMovies: popularMoviesReducer,
});

const store = createStore(reducers);

export default store;
