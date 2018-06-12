import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';

import ModifyCuration from '.';

it('ModifyCuration: default', () => {
  const component = renderer.create(
    <Router>
      <ModifyCuration />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
