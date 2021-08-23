import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import Watch from "./Pages/Watch";
import WatchSeries from "./Pages/WatchSeries";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createPopularMovies, createPopularTv } from "./Actions/Popular";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        dispatch(createPopularMovies(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPopularTv = async () => {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        dispatch(createPopularTv(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies();
    fetchPopularTv();
  }, [dispatch]);
  return (
    <BrowserRouter basename="/Trending-Hubb">
      <Header />
      <div className="app">
        <Container className="cont">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/watch/:id" component={Watch} />
            <Route
              exact
              path="/watch/:id/:season/:ep"
              component={WatchSeries}
            />
            <Route path="/" component={Trending} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}
export default App;
