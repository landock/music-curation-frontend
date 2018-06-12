import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import CurationSearchBar from '.';

it('CurationSearchBar: default', () => {
  const component = renderer.create(<CurationSearchBar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
