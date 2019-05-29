import React, { Fragment } from 'react';
import HomeComponent from '../components/HomePage';
import Footer from '../components/shared/Footer';

import '../assets/styles/base.css';

const HomePage = () => (
  <Fragment>
    <HomeComponent />
    <Footer />
  </Fragment>
);

export default HomePage;
