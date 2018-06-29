import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import SearchResultFilterSubHeader from './index';

it('SearchResultFilterSubHeader: default', () => {
  const component = render(<SearchResultFilterSubHeader />);
  expect(component).toBeTruthy();
});
