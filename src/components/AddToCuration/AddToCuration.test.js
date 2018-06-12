import React from 'react';
import { render } from 'react-testing-library';
import AddToCuration from '.';

it('AddToCuration: default', () => {
  const { getByTestId } = render(<AddToCuration />);
  const whatever = getByTestId('add-to-curation');
  expect(whatever).toBeTruthy();
});
