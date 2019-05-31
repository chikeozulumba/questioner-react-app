import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter, Redirect } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import ProtectPage from '../middleware/protect';
import ProfilePage from '../profile';

import axios from '../../lib/axios';

describe('<ProfilePage />', () => {
  let AUTH_TOKEN = null;
  beforeAll(async () => {
    const user = {
      email: 'amaka@gmail.com',
      password: 'AdakuNwanne',
    };
    const { data: { data }} = await axios.post('/auth/signin', user);
    const [{ token }] = data;
    AUTH_TOKEN = token;
  });

  beforeEach(() => {
    localStorage.setItem('qa-token', AUTH_TOKEN);
  });

  it('should render component when validation fails', () => {
    const protectedPage = mount(<BrowserRouter><ProtectPage component={ProfilePage} render={ReactDOM.render}  /></BrowserRouter>);
    expect(protectedPage.find(ProfilePage)).toHaveLength(1);
  });
});

describe('<ProfilePage />', () => {
  beforeEach(() => {
    localStorage.setItem('qa-token', 'AUTH_TOKEN');
  });

  it('should render component when validation fails', () => {
    const protectedPage = shallow(
      <BrowserRouter>
        <MemoryRouter initialEntries={[`/login`]}>
          <ProtectPage component={ProfilePage} render={ReactDOM.render}  />
        </MemoryRouter>
      </BrowserRouter>
    );
    expect(protectedPage).toBeTruthy();
  });
});