import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TagCollection from '.';
import { tags } from '../../fixtures/test_data';

storiesOf('TagCollection', module).add('default', () => (
  <TagCollection tags={tags} />
));
