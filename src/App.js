import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import { Navigation, AuthNavigation } from './components/shared/Navigation';
import './App.css';

const authToken = localStorage.getItem('qa-token');
const App = () => (
  <Fragment>
    <BrowserRouter>
      {(authToken && (authToken !== undefined)) ? <AuthNavigation /> : <Navigation />}
    </BrowserRouter>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
