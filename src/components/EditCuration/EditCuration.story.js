import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import EditCuration from '.';

import { Provider } from 'react-redux';

import mockStore from '../../fixtures/mockStore';

import { curation } from '../../fixtures/test_data';

const what = {
  Curations: {
    currentCuration: {
      id: '23',
      imageUrl: 'https://placeimg.com/250/250/tech/grayscale',
      tracks: [
        {
          id: '12',
          imageUrl: 'https://placeimg.com/250/250/animals',
          artistName: 'spongebop',
          trackName: 'squarewave',
        },
      ],
      name: 'story testing',
    },
  },
};
storiesOf('EditCuration', module)
  .addDecorator(story => {
    return (
      <Provider store={mockStore(what)}>
        <Router>{story()}</Router>
      </Provider>
    );
  })
  .add('default', () => (
    <EditCuration match={{ params: { id: 4 } }} curation={curation} />
  ));
