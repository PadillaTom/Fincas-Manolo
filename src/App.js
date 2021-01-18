// Imports:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:

// Pages:
import { Home, ErrorPage } from './Pages';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
