import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SearchResultCollection from '.';
import { tracks } from '../../fixtures/test_data';

storiesOf('SearchResultCollection', module).add('default', () => (
  <SearchResultCollection searchResults={tracks} />
));
