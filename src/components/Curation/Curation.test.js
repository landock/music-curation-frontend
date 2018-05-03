import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Curation from '.';
import { curation } from '../../fixtures/test_data';

it('Curation: default', () => {
  const component = renderer.create(<Curation curation={curation} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
