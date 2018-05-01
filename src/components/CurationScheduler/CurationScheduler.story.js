import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CurationScheduler from '.';

let storyProps = {
  created_at: '2018-04-30T22:09:50.997Z',
  updated_at: '2018-04-30T22:09:50.997Z',
  scheduled_at: '2018-04-30T22:09:50.997Z',
  environment: ['development'],
  published: false,
};

storiesOf('CurationScheduler', module).add('default', () => (
  <CurationScheduler {...storyProps} />
));
