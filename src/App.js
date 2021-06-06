import { Container } from '@material-ui/core';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/MainNav';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Rout path='/' component={Trending} />
            <Rout path='/' component={Movies} />
            <Rout path='/' component={Series} />
            <Rout path='/' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
