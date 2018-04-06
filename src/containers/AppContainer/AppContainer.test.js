import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { AppContainer } from './index';
import fetchMock from 'fetch-mock';

describe('AppContainer', () => {
  let component;

  it('renders without crashing', () => {
    component = renderer.create(<AppContainer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should dispatch fetchCurations when mounted', () => {
    const fetchCurationsMock = jest.fn();
    fetchCurationsMock.mockReturnValue({ curationsById: ['1'] });

    let mockActions = { fetchCurations: fetchCurationsMock };

    component = mount(<AppContainer actions={mockActions} />);
    expect(fetchCurationsMock).toHaveBeenCalled();
  });
});
