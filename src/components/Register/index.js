/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SignUpValidation } from '../../utils/validation';

import axios from '../../lib/axios';

const ErrorText = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: Circular-Book;
  color: red;
`;

const Register = (props) => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});
  const handleRegisterSubmit = async () => {
    try {
      const validation = SignUpValidation(formData);
      if (validation.fails()) {
        return setErrors(Object.values(validation.errors.errors));
      }
      const { data: { data: [data] } } = await axios.post('/auth/signup', formData);
      if (data.user && data.token) {
        localStorage.setItem('qa-token', data.token);
        return props.history.push('/profile');
      }
    } catch (error) {
      return setErrors([error.response.data.message]);
    }
  };

  const registerInput = (data, type) => setFormData({ ...formData, [type]: data });
  return (
    <Fragment>
      <div className="container">
        <div id="login-form" className="card mauto m4 p3">
          <form action="/" method="POST">
            <div className="container">
              <h3 className="md-text">Register</h3>
              {Object.keys(errors).length > 0 && <ErrorText className="text-danger">{errors[Object.keys(errors)[0]]}</ErrorText>}
              <div className="m1 input">
                <label className="m1" htmlFor="name">Full Name</label>
                <input className="p1 b-rsm" type="text" name="fullName" placeholder="Enter your Full Name" onChange={evt => registerInput(evt.target.value, 'firstName')} />
              </div>
              <div className="m1 input">
                <label className="m1" htmlFor="name">Last Name</label>
                <input className="p1 b-rsm" type="text" name="lastname" placeholder="Last Name" onChange={evt => registerInput(evt.target.value, 'lastName')} />
              </div>
              <div className="m1 input">
                <label className="m1" htmlFor="name">Email Address</label>
                <input className="p1 b-rsm" type="email" name="email" placeholder="Your Email Address" onChange={evt => registerInput(evt.target.value, 'email')} />
              </div>
              <div className="m1 input">
                <label className="m1" htmlFor="name">Phone Number</label>
                <input className="p1 b-rsm" type="text" name="phone" placeholder="Enter Phone Number" onChange={evt => registerInput(evt.target.value, 'phone')} />
              </div>
              <div className="m1 input">
                <label className="m1" htmlFor="name">Password</label>
                <input className="p1 b-rsm" type="password" name="password" placeholder="*************" onChange={evt => registerInput(evt.target.value, 'password')} />
              </div>
              <div className="m2 input">
                <a className="reg-btn box-sh-dark hover-lg" onClick={handleRegisterSubmit}>Join Questioner</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Register);
