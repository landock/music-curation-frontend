import React from 'react';
import BulkCurationEditor from '.';
import { shallow } from 'enzyme';

it('BulkCurationEditor: default', () => {
  const component = shallow(<BulkCurationEditor />);
  expect(component.text()).toEqual('<Form />')
});
