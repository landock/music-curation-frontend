import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

it('renders without crashing', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(welcome));
});
