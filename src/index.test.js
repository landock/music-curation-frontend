import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

it('renders without crashing', () => {
  let root = document.getElementById('root');

  expect(root.innerHTML).toBeFalsy();

  const index = require('./index');

  console.log(root);
  expect(root).toHaveProperty('_reactRootContainer');
});
