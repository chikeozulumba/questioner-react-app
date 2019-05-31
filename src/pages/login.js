import React, { Fragment } from 'react';
import LoginComponent from '../components/Login';
import Footer from '../components/shared/Footer';

import '../assets/styles/base.css';
import '../assets/styles/format.css';

const LoginPage = () => (
  <Fragment>
    <LoginComponent />
    <Footer />
  </Fragment>
);

export default LoginPage;
