import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import RegisterPage from '../register';
import randomEmail from 'random-email';

describe('<RegisterPage />', () => {
  it('should render component when validation fails', () => {
    const registerPage = mount(<BrowserRouter><RegisterPage /></BrowserRouter>);
    expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
    expect(registerPage).toMatchSnapshot();
    registerPage.find('input[name="fullName"]').simulate('change', { target: {name: "fullName", value: "" }});
    registerPage.find('input[name="lastname"]').simulate('change', { target: {name: "lastname", value: "" }});
    registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: "" }});
    registerPage.find('input[name="phone"]').simulate('change', { target: {name: "phone", value: "" }});
    registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "" }});
    registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
  });
});

describe('<RegisterPage />', () => {
  it('should render component when email already exists', () => {
    const registerPage = mount(<BrowserRouter><RegisterPage /></BrowserRouter>);
    expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
    expect(registerPage).toMatchSnapshot();
    registerPage.find('input[name="fullName"]').simulate('change', { target: {name: "fullName", value: "John" }});
    registerPage.find('input[name="lastname"]').simulate('change', { target: {name: "lastname", value: "Wick" }});
    registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: "andela@gmail.com" }});
    registerPage.find('input[name="phone"]').simulate('change', { target: {name: "phone", value: "08131976306" }});
    registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "Ozulumba1234" }});
    registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
  });
});

describe('<RegisterPage />', () => {
  it('should render component when validation passes', () => {
    const registerPage = mount(<BrowserRouter><RegisterPage /></BrowserRouter>);
    expect(registerPage.find('input[name="fullName"]')).toHaveLength(1);
    expect(registerPage.find('input[name="lastname"]')).toHaveLength(1);
    expect(registerPage.find('input[name="email"]')).toHaveLength(1);
    expect(registerPage.find('input[name="phone"]')).toHaveLength(1);
    expect(registerPage.find('input[name="password"]')).toHaveLength(1);
    expect(registerPage.find('.reg-btn.box-sh-dark.hover-lg')).toHaveLength(1);
    expect(registerPage).toMatchSnapshot();
    registerPage.find('input[name="fullName"]').simulate('change', { target: {name: "fullName", value: "John" }});
    registerPage.find('input[name="lastname"]').simulate('change', { target: {name: "lastname", value: "Wick" }});
    registerPage.find('input[name="email"]').simulate('change', { target: {name: "email", value: randomEmail({ domain: 'gmail.com' }) }});
    registerPage.find('input[name="phone"]').simulate('change', { target: {name: "phone", value: "08131976306" }});
    registerPage.find('input[name="password"]').simulate('change', { target: {name: "password", value: "Ozulumba1234" }});
    registerPage.find('.reg-btn.box-sh-dark.hover-lg').simulate('click');
  });
});

