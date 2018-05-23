import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';

import App from './index';

describe('App Component', () => {
  let component, mockStore, store;
  beforeEach(() => {
    component = shallow(<App />);
    mockStore = configureMockStore([thunk]);
  });
  it('renders without crashing', () => {
    let store = mockStore({});
    let tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render shit if curations prop exists', () => {
    let name = 'Test fuckin Name';
    let id = '11';
    let curationMarkup = (
      <p>
        {name} - {id}
      </p>
    );
    let artistName = 'George';
    let trackName = 'Ullmer';
    let trackMarkup = (
      <p>
        {artistName} - {trackName}
      </p>
    );

    component.setProps({
      curations: [
        {
          id,
          name,
          imageUrl: 'test',
          tracks: [
            {
              id: 22,
              artistName,
              trackName,
              imageUrl: 'test',
            },
          ],
        },
      ],
    });

    expect(component.contains(curationMarkup));
    expect(component.contains(trackMarkup));
  });
});
