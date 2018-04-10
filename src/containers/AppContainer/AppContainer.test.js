import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { AppContainer } from './index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

describe('AppContainer', () => {
  let component;

  it('renders without crashing', () => {
    let mockStore = configureMockStore([thunk]);
    let store = mockStore({});
    component = renderer.create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
