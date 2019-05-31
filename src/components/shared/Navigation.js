/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <section id="navigation">
    <nav className="navbar">
      <a href="" id="nav-brand">
        <img src="./assets/imgs/logo.svg" alt="" />
      </a>
      <ul className="nav-menu">
        <li><Link className="hover-t" to="/login">Login</Link></li>
        <li><Link className="reg-btn box-sh-dark hover-lg" to="/register">Join Questioner</Link></li>
      </ul>
      <a id="menu" to="">
        <img src="./assets/imgs/menu.svg" alt="" />
      </a>
    </nav>
  </section>
);

export const AuthNavigation = () => (
  <section id="navigation">
    <nav className="navbar">
      <a href="" id="nav-brand">
        <img src="./assets/imgs/logo.svg" alt="" />
      </a>
      <ul className="nav-menu">
        <li className="visibility"><a className="hover-t" href="./pages/meetup.html">Meetups</a></li>
        <li className="visibility"><a className="hover-t" href="./pages/questions.html">Questions</a></li>
        <li><Link className="hover-t" to="/login">Login</Link></li>
        <li><a className="reg-btn box-sh-dark hover-lg" href="./pages/register.html">Join Questioner</a></li>
      </ul>
      <a id="menu" href="">
        <img src="./assets/imgs/menu.svg" alt="" />
      </a>
    </nav>
  </section>
);
