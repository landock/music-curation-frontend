import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import configureMockStore from 'redux-mock-store';

const store = configureMockStore([thunk, routerMiddleware]);

export default function mockStore(mockData) {
  return store(mockData);
}
