import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import Curations from '.';
import CurationsCollection from '../../components/CurationsCollection';

describe('Curations Container', () => {
  let store, testData, mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    testData = { Curations: [1] };
    store = mockStore(testData);
  });

  it('should have a store passed from a Provider as props', () => {
    let component = mount(
      <Provider store={store}>
        <Curations />
      </Provider>
    );

    let componentState = component.instance().props.store.getState();

    expect(componentState).toEqual(testData);
  });

  it('should fetch data when mounted', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    let component = mount(
      <Provider store={store}>
        <Curations />
      </Provider>
    );
    expect(fetch.mock.calls.length).toEqual(1);
    fetch.resetMocks();
  });
});
