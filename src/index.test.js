import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

it('renders without crashing', () => {
  const curations = [{ id: 1 }];
  fetchMock.get(/curations/, curations);
  let root = document.getElementById('root');

  expect(root.innerHTML).toBeFalsy();

  const index = require('./index'); //I dont know how to import the module a better way;

  expect(root).toHaveProperty('_reactRootContainer');
});
