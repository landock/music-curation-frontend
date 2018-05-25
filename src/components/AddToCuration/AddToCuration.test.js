import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import AddToCuration from '.';

it('AddToCuration: default', () => {
  const component = shallow(<AddToCuration />);
  // expect(tree).toMatchSnapshot()
  expect(component.text()).toEqual('<Menu />');
});
