import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SearchResultCard from '.';

const storyProps = {
  trackName: 'whatever',
  artistName: 'Can',
  durationInSeconds: 3600,
  imageUrl: 'https://picsum.photos/150',
  streamUrl: '',
  recordLabels: ['Warner Music Group'],
};
storiesOf('SearchResultCard', module).add('default', () => (
  <SearchResultCard {...storyProps} />
));
