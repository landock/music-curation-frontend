import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { AppContainer } from './index';

describe('AppContainer', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<AppContainer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
