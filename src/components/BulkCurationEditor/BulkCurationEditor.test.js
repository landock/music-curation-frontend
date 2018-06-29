import React from 'react';
import BulkCurationEditor from '.';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup);

it('BulkCurationEditor: default', () => {
  const { container } = render(<BulkCurationEditor />);
  const form = container.querySelector('form');
  expect(form).toBeTruthy();
});
