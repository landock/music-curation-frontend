import React from 'react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from './';

const curations = [
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
];

const mockStore = configureMockStore([thunk]);
const store = mockStore({ Curations: curations });

storiesOf('App', module)
  .addDecorator(story => {
    return <Provider store={store}>{story()}</Provider>;
  })
  .add('default', () => <App curations={curations} />);
storiesOf('App', module)
  .addDecorator(story => {
    return <Provider store={store}>{story()}</Provider>;
  })
  .add('no props', () => <App curations={null} />);
