import React from 'react';
import { render } from 'react-testing-library';
import CurationFilterSubHeader from './index';
it('CurationFilterSubHeader: default', () => {
  const { container } = render(<CurationFilterSubHeader />);
  expect(container).toHaveTextContent('No tags');
});
