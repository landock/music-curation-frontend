import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const store = configureMockStore([thunk]);

export default function mockStore(mockData) {
  return store(mockData);
}
