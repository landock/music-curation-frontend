import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import CurationsCollection from '.';

describe('CurationsCollection', () => {
  let component;
  it('Render without crashing', () => {
    component = renderer.create(<CurationsCollection />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render placeholder message if no curations are passed as props', () => {
    component = shallow(<CurationsCollection />);
    const placeholderMarkup = <p>No Curations Found</p>;
    expect(component.contains(placeholderMarkup)).toBe(true);
  });
});
