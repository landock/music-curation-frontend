import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AddTags from '.';

storiesOf('AddTags', module).add('default', () => (
  <AddTags
    tags={[{ id: 1, title: 'Breakfast' }, { id: 2, title: 'Native American' }]}
  />
));
