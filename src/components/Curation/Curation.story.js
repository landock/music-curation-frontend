import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Curation from '.';

const curation = {
  id: '23',
  imageUrl: 'https://placeimg.com/250/250/tech/grayscale',
  tracks: [
    {
      id: '12',
      imageUrl: 'https://placeimg.com/250/250/animals',
      artistName: 'spongebop',
      trackName: 'square wave',
    },
    {
      id: '13',
      imageUrl: 'https://placeimg.com/250/250/animals',
      artistName: 'Trevor Noah',
      trackName: 'Disko Deck',
    },
  ],
  name: 'story testing',
};
storiesOf('Curation', module).add('default', () => (
  <Curation curation={curation} />
));
