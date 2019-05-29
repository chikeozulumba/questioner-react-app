import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <section id="section-hero">
      <div className="hero-text container t-al">
        <h1 className="bg-text">Questioner</h1>
        <h3 className="md-text">
          An App that helps meetup organizers prioritize
          questions to be answered.
        </h3>
        <Link to="/register" className="cta-btn box-sh-dark">Get Started</Link>
      </div>
    </section>

    <section className="info-platform">
      <div className="container">
        <div className="info-action">
          <img src="./assets/imgs/4023888-512.png" alt="" />
        </div>
        <div className="info-desc">
          <h3 className="md-text">Scalability is Core</h3>
          <p className="sm-text">
            Questioner is an online platform for helping meetup organizers prioritize their
            questions to be answered.
          </p>
          <p className="sm-text">
            We are largest network of local communities that meet
            offline about their shared interests and passions. From book
            clubs to craft brewery crawls to coding workshops,
            we help people do more of what matters to them—inspiring and
            impacting millions of lives.
          </p>
        </div>
      </div>
    </section>

    <section className="info-expl">
      <div className="container">
        <div className="info-desc">
          <h3 className="md-text">Simple Precise Software</h3>
          <p className="sm-text">
            Questioner is an online platform for helping meetup organizers prioritize their
            questions to be answered.
          </p>
          <p className="sm-text">
            Users are allowed to vote vote on asked questions and such questions bubble to the top
            or bottom of the log.
          </p>
        </div>
        <div className="info-action">
          <img src="./assets/imgs/4014664-512.png" alt="" />
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
