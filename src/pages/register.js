import React, { Fragment } from 'react';
import RegisterComponent from '../components/Register';
import Footer from '../components/shared/Footer';

import '../assets/styles/base.css';

const RegisterPage = () => (
  <Fragment>
    <RegisterComponent />
    <Footer />
  </Fragment>
);

export default RegisterPage;
