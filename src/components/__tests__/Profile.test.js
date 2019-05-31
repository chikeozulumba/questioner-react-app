import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from '../Profile';
import Meetup from '../Profile/meetup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ProfilePage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders meetup component', () => {
  const meetups = {
    happeningon: "Tuesday, 31st April 2018",
    images: ["http://localhost:5100/api/v1/image.png"],
    location: "Abuja",
    tags: ["ES6", "Babel"],
    topic: "Javascript Learning",
  };

  const div = document.createElement('div');
  ReactDOM.render(<Meetup meetups={[meetups]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
