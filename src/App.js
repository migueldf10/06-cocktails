import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Router path='/:coctail'>
            <h1> This is a cocktail page</h1>
          </Router>
          <Router path='/'>
            <h1> This is the home page</h1>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
