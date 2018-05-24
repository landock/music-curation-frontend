import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import CurationFilterSubHeader from '.';

it('CurationFilterSubHeader: default', () => {
  const component = renderer.create(<CurationFilterSubHeader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
