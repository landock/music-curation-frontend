import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SearchResultFilterSubHeader from '.';
import { tags } from '../../fixtures/test_data';

storiesOf('SearchResultFilterSubHeader', module).add('default', () => (
  <SearchResultFilterSubHeader tags={tags} />
));
