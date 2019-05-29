import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <footer className="bg-secondary">
      <div className="container">
        <div className="info-about">
          <h3 className="md-text">Interested in Questioner?</h3>
          <div className="social-links">
            <a href="#!"><img src="./assets/imgs/icons/facebook.svg" alt="" /></a>
            <a href="#!"><img src="./assets/imgs/icons/instagram.svg" alt="" /></a>
            <a href="#!"><img src="./assets/imgs/icons/twitter.svg" alt="" /></a>
            <a href="#!"><img src="./assets/imgs/icons/linkedin.svg" alt="" /></a>
          </div>
        </div>
        <div className="additional-info">
          <h3 className="md-text">Questioner Goals</h3>
          <p className="sm-text">
            We create a safe space for others to ask for help.
            We ask for help when we’re stuck and motivate others to do the same.
          </p>
          <p className="sm-text">
            We create space for psychological safety
            in all our interactions by encouraging peers to be open and honest about
            their experiences.
          </p>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
