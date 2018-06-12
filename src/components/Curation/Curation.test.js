import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import mockStore from '../../fixtures/mockStore';
import Curation from './index';

it('renders correctly', () => {
  const trackName = 'testin shit';
  const mockCuration = {
    CurrentCuration: {},
    Curations: {
      entities: {
        id: 1,
        imageUrl: 'http://fpoimg.com/200x200',
        description: 'whatever description here',
        tracks: { 1: { trackName }, 2: { trackName: 'lksdfj' } },
        name: 'Sprint 14 remix',
      },
    },
  };

  const store = mockStore(mockCuration);
  const { container } = render(
    <Provider store={store}>
      <Curation curation={{ tracks: [1, 2] }} />
    </Provider>
  );

  expect(container).toHaveTextContent(trackName);
});
