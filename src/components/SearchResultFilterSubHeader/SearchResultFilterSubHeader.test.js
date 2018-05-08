import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchResultFilterSubHeader from '.';

it('SearchResultFilterSubHeader: default', () => {
  const component = renderer.create(<SearchResultFilterSubHeader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
