import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.scss'
import HomePage from './views/homePage';
import CocktailTypePage from './views/cocktailTypePage';
import CocktailPage from './views/cocktailPage';
import SearchResultsPage from './views/searchResultsPage';
import Header from './components/header'

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
          <Route path='/search/:searchQuery'>
            <h1> This is the cocktail search results page</h1>
            <SearchResultsPage />
          </Route>
          <Route path='/types/:cocktailEncoded'>
            <h1> This is the cocktail type category page</h1>
            <CocktailTypePage />
          </Route>
          <Route path='/cocktails/:cocktailId'>
            <CocktailPage />
          </Route>
          <Route path='/'>
            <h1> This is the home page</h1>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
