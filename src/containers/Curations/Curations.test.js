import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Curations from '.';
import CurationsCollection from '../../components/CurationsCollection';

describe('Curations', () => {
  let component, store, testData, mockStore, debug;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    testData = { Curations: [1] };
    store = mockStore(testData);
    const renderResult = render(
      <Provider store={store}>
        <Curations />
      </Provider>
    );
    debug = renderResult.debug;
  });

  it('should have a store passed from a Provider as props', () => {
    debug();
  });
});
