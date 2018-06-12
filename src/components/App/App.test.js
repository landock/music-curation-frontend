import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';

describe('App Component', () => {
  beforeAll(() => {});

  // it('renders without crashing', () => {
  //   let store = mockStore({});
  //   let tree = renderer
  //     .create(
  //       <Provider store={store}>
  //         <Router>
  //           <App />
  //         </Router>
  //       </Provider>
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
