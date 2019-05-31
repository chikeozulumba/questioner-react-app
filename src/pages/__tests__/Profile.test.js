import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import ProfilePage from '../profile';
import randomEmail from 'random-email';

describe('<ProfilePage />', () => {
  it('should render component when validation fails', () => {
    const profilePage = mount(<BrowserRouter><ProfilePage /></BrowserRouter>);
  });
});