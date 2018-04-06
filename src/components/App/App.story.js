import React from 'react';
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
storiesOf('App', module).add('default', () => <App curations={curations} />);
storiesOf('App', module).add('no props', () => <App curations={null} />);
