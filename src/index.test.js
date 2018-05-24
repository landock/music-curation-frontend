import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

it('renders without crashing', () => {
  const curations = [{ id: 1 }];
  fetch.mockResponseOnce(JSON.stringify(curations));
  let root = document.getElementById('root');

  expect(root.innerHTML).toBeFalsy();

  const index = require('./index'); //module needs to be imported after the markup is added to the dom

  expect(root).toHaveProperty('_reactRootContainer');
});
