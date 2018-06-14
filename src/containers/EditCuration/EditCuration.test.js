import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import mockStore from '../../fixtures/mockStore';
import EditCuration from '.';

it('EditCuration: default', () => {
  const store = mockStore({
    CurrentCuration: {
      entities: {
        tracks: { 1: { trackName: 'skldjf' }, 2: { trackName: 'lksdjfl' } },

        curations: {
          2: {
            id: 2,
            imageUrl: 'http://fpoimg.com/200x200',
            description: 'whatever description here',
            tracks: [1, 2],
            name: 'Sprint 14 remix',
          },
        },
      },
    },
  });
  const component = renderer.create(
    <Provider store={store}>
      <EditCuration match={{ params: { id: 2 } }} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
