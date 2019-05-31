import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { authenticate } from '../../lib/auth';

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authenticate()) {
        return <Redirect to="/login" />;
      }
      return Component ? <Component {...props} /> : render(props);
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
