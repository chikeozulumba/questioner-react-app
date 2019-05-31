import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import { Navigation, AuthNavigation } from './components/shared/Navigation';
import PrivateRoute from './pages/middleware/protect';

const authToken = localStorage.getItem('qa-token');
const App = () => (
  <Fragment>
    <BrowserRouter>
      {(authToken && (authToken !== undefined)) ? <AuthNavigation /> : <Navigation />}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute render={render} path="/profile" exact component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
