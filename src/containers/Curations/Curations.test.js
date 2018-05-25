import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import Curations from '.';
import CurationsCollection from '../../components/CurationsCollection';

describe('Curations Container', () => {
  let component, store, testData, mockStore;

  beforeAll(() => {
    mockStore = configureMockStore([thunk]);
    testData = { Curations: [1] };
    store = mockStore(testData);
    component = mount(
      <Provider store={store}>
        <Curations />
      </Provider>
    );
  });

  it('should have a store passed from a Provider as props', () => {
    let componentState = component.instance().props.store.getState();
    expect(componentState).toEqual(testData);
  });

  it('Should be a RecycleComponent', () => {
    let shallowComponent = shallow(
      <Provider store={store}>
        <Curations />
      </Provider>
    );

    expect(shallowComponent.text()).toEqual('<RecycleComponent />');
  });

  it('test if it added the curation collection', () => {
    expect(component.find(CurationsCollection).length).toEqual(1);
  });

  it('should fetch data when mounted', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    expect(fetch.mock.calls.length).toEqual(1);
    fetch.resetMocks();
  });
});
