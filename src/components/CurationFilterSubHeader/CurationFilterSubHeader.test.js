import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import CurationFilterSubHeader from './index';
it('CurationFilterSubHeader: default', () => {
  const { container, debug } = render(<CurationFilterSubHeader />);
  // expect(tree).toMatchSnapshot();
  debug();
  expect(container).toHaveTextContent('No tags');
});
