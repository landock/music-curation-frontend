import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import TagCollection from '.';
import { tags } from '../../fixtures/test_data';
it('TagCollection: default', () => {
  let tagCollectionProps = { tags };
  const component = renderer.create(<TagCollection {...tagCollectionProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
