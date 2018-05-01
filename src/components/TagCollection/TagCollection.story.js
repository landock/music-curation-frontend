import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TagCollection from '.';

const tags = [
  { id: 1, title: 'dank' },
  { id: 2, title: 'awesome' },
  { id: 3, title: 'long' },
  { id: 4, title: 'sick' },
  { id: 5, title: 'tank' },
  { id: 6, title: 'bagel' },
  { id: 7, title: 'TREE-TRIMMER' },
  { id: 8, title: 'sci fi funk' },
];
storiesOf('TagCollection', module).add('default', () => (
  <TagCollection tags={tags} />
));
