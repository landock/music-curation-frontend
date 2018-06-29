import React from 'react';
import { render } from 'react-testing-library';
import TracksView from '.';

it('TracksView', () => {
  const { container } = render(
    <TracksView tracks={['face off', 'police dawg']} />
  );
  expect(container).toBeTruthy();
});
