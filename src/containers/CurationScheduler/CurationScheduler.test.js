import React from 'react';
import { render } from 'react-testing-library';

import CurationScheduler from '.';

it('CurationScheduler: default', () => {
  const {container, debug} = render(<CurationScheduler />);
  debug();
});
