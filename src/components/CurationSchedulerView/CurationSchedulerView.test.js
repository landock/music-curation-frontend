import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import CurationSchedulerView from '.';

it('CurationSchedulerView: default', () => {
  const component = render(<CurationSchedulerView />);
});
