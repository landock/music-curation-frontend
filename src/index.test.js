import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import stringify from 'json-stringify-safe';

import Index from './index';

it('renders without crashing', () => {
  let stringifiedIndex = stringify(Index);
  expect(stringifiedIndex).toMatchSnapshot();
});
