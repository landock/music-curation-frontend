import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import CurationFilterSubHeader from '.';

it('CurationFilterSubHeader: default', () => {
  const component = shallow(<CurationFilterSubHeader />);
  // expect(tree).toMatchSnapshot();
  expect(component.text()).toEqual('<Form />');
});
