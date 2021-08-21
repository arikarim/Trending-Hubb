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

function App() {
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
// aa
// ok
export default App;
