import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import fetchMock from 'fetch-mock';

import thunk from 'redux-thunk';
import ConnectedCurationsContainer, { CurationsContainer } from '.';
import CurationsCollection from '../../components/CurationsCollection';

describe('CurationsContainer', () => {
  let store, testData, mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    testData = { Curations: [1] };
    store = mockStore(testData);
  });

  it('should have a store passed from a Provider as props', () => {
    let component = mount(
      <Provider store={store}>
        <ConnectedCurationsContainer />
      </Provider>
    );

    let componentState = component.instance().props.store.getState();

    expect(componentState).toEqual(testData);
  });

  it('should execute fetchCurations when mounted', () => {
    const fetchCurationsMock = jest.fn();
    let component = mount(
      <CurationsContainer store={store} doFetchCurations={fetchCurationsMock} />
    );

    expect(fetchCurationsMock).toHaveBeenCalled();
  });

  it('should fetch data when mounted', () => {
    fetchMock.get('*', { hello: 'world' });
    let component = mount(
      <Provider store={store}>
        <ConnectedCurationsContainer />
      </Provider>
    );
    expect(fetchMock.called()).toEqual(true);
  });

  it('should have a CurationsCollection as a child', () => {
    const fetchCurationsMock = jest.fn();
    let component = shallow(
      <CurationsContainer doFetchCurations={fetchCurationsMock} />
    );
    expect(component.contains(<CurationsCollection />)).toEqual(true);
  });
});