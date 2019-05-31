import React, { Fragment } from 'react';

const Side = () => (
  <Fragment>
    <div className="profile user card">
      <img className="img mauto" src="https://res.cloudinary.com/kobe/image/upload/v1557604145/x2valykjysfkjxkrvyse.jpg" alt="" />
      <div className="bio">
        <h3 className="username sm-text">SpongeBob</h3>
        <div className="hide-lg stats m1">
          <span>
            <h3 className="sm-text">40</h3>
              Answered
          </span>
          <span>
            <h3 className="sm-text">35</h3>
              Commented
          </span>
        </div>
      </div>
      <div className="divider" />
      <div className="hide-sm stats m1">
        <span>
          <h3 className="sm-text">40</h3>
            Answers
        </span>
        <span>
          <h3 className="sm-text">35</h3>
            Comments
        </span>
      </div>
    </div>
  </Fragment>
);

export default Side;
