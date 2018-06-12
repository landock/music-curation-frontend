import React from 'react';
import { render } from 'react-testing-library';

import CurationScheduler from '.';

it('CurationScheduler: default', () => {
  const component = render(<CurationScheduler />);
  // const tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
  expect(component.text()).toEqual('<Form />');
});
