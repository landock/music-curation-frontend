import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import CurationScheduler from '.';

it('CurationScheduler: default', () => {
  const component = shallow(<CurationScheduler />);
  // const tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
  expect(component.text()).toEqual('<Form />');
});
