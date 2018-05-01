import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CurationsCollection from '.';

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
  {
    id: '54',
    imageUrl: 'https://placeimg.com/250/250/animals/grayscale',
    tracks: [
      {
        id: '12',
        imageUrl: 'https://placeimg.com/250/250/tech',
        artistName: 'Doug Handleman',
        trackName: 'Bing bong eats fresh fish',
      },
    ],
    name: 'Space paper & Beezlebub',
  },
];
storiesOf('CurationsCollection', module).add('default', () => (
  <CurationsCollection curations={{ curations }} />
));
