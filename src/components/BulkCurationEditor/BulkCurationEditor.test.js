import React from 'react';
import BulkCurationEditor from '.';
import { render } from 'react-testing-library';

it('BulkCurationEditor: default', () => {
  const { container } = render(<BulkCurationEditor />);
  const form = container.querySelector('form');
  expect(form).toBeTruthy();
});
