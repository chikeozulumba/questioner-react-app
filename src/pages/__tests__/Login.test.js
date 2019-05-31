import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import LoginPage from '../login';
import randomEmail from 'random-email';

describe('<LoginPage />', () => {
  it('should render component when validation fails', () => {
    const registerPage = mount(<BrowserRouter><LoginPage /></BrowserRouter>);
    expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
    expect(registerPage).toMatchSnapshot();
    registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: "" }});
    registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "" }});
    registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
  });
});

describe('<LoginPage />', () => {
  it('should render component when email already exists', () => {
    const registerPage = mount(<BrowserRouter><LoginPage /></BrowserRouter>);
    expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
    expect(registerPage).toMatchSnapshot();
    registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: "andela@gmail.com" }});
    registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "Ozulumba1234" }});
    registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
  });
});

// describe('<LoginPage />', () => {
//   it('should render component when validation passes', () => {
//     const registerPage = mount(<BrowserRouter><LoginPage /></BrowserRouter>);
//     expect(registerPage.find('input[name="email"]')).toHaveLength(1);
//     expect(registerPage.find('input[name="password"]')).toHaveLength(1);
//     expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
//     expect(registerPage).toMatchSnapshot();
//     registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: randomEmail({ domain: 'gmail.com' }) }});
//     registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "Ozulumba1234" }});
//     registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
// //   });
// });

