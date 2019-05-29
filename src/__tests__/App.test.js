import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('render navigation bar', () => {
  it('Should render unauthenticated with an unauthenticated navigation bar', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.resetAllMocks();
      localStorage.setItem.mockClear();
    });
    localStorage.removeItem('qa-token');
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render authenticated with an authenticated navigation bar', () => {
    beforeEach(() => {
      localStorage.setItem('qa-token', 'effjrgjkbrgrbgrbgjkgbrj');
    });
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});