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
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container className="cont">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route exact path="/watch/:id" component={Watch} />
            <Route path="/watch/:id/:season/:ep" component={WatchSeries} />
            <Route path="/Trending-Hub/" component={Trending} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
