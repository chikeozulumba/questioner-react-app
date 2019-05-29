import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import RegisterPage from './pages/register';
import { Navigation, AuthNavigation } from './components/shared/Navigation';

const authToken = localStorage.getItem('qa-token');
const App = () => (
  <Fragment>
    <BrowserRouter>
      {(authToken && (authToken !== undefined)) ? <AuthNavigation /> : <Navigation />}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
