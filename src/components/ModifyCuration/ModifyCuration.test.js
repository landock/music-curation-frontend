import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';

import ModifyCuration from '.';

it('ModifyCuration: default', () => {
  const { container } = render(
    <Router>
      <ModifyCuration />
    </Router>
  );
  expect(container).toBeTruthy();
});
