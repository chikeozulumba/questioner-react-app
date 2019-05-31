/* eslint-disable no-console */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Meetup = ({ meetups }) => {
  if (meetups.length < 1) {
    return (<h3 className="md-text title" style={{ color: 'black', textAlign: 'center', margin: '2rem auto' }}>No Meetups available</h3>);
  }
  return (
    <Fragment>
      <div className="meetups">
        {meetups.map((meetup, i) => (
          // eslint-disable-next-line no-plusplus
          <div className="questions card-lg" key={++i}>
            <div className="content pall-1">
              <div className="q-title">
                <img className="img mauto" height="2rem" src="https://res.cloudinary.com/kobe/image/upload/w_50,h_50/v1557604145/x2valykjysfkjxkrvyse.jpg" alt="" />
                <div className="meta">
                  <h3 className="md-text title">{meetup.topic}</h3>
                  <a className="q-link" href="./meetup.html">
                    <h3 className="sm-text">DevOps Lagos Meetup</h3>
                  </a>
                </div>
              </div>
              <div className="divider" />
              <div className="q-actions">
                <span>
                  <a href="#!"><img src="../assets/imgs/icons/comment.svg" alt="" /></a>
                  261
                </span>
                <span>
                  <a href="#!"><img src="../assets/imgs/icons/tag.svg" alt="" /></a>
                  Kubernetes, GCP, AWS
                </span>
                <span>
                  <a href="#!"><img src="../assets/imgs/icons/pointer.svg" alt="" /></a>
                  Greece
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">
          <span className="card hover-lg hover-t">...</span>
          <span className="card hover-lg hover-t">3</span>
          <span className="card hover-lg hover-t">4</span>
          <span className="card hover-lg hover-t">5</span>
          <span className="card hover-lg hover-t">6</span>
          <span className="card hover-lg hover-t">next</span>
        </div>
      </div>
    </Fragment>
  );
};
Meetup.propTypes = {
  meetups: PropTypes.array.isRequired,
};

export default Meetup;
