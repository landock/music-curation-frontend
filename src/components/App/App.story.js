import React from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import mockStore from '../../fixtures/mockStore';

import App from './';

const curations = {
  curations: [
    {
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
  ],
};

const store = mockStore({ Curations: curations });

storiesOf('App', module)
  .addDecorator(story => {
    return (
      <Provider store={store}>
        <Router>{story()}</Router>
      </Provider>
    );
  })
  .add('default', () => <App />);
