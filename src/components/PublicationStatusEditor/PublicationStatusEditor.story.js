import React from 'react';
import { storiesOf } from '@storybook/react';
import PublicationStatusEditor from '.';
import { MemoryRouter } from 'react-router-dom';

let storyProps = {
  created_at: '2018-04-30T22:09:50.997Z',
  updated_at: '2018-04-30T22:09:50.997Z',
  scheduled_at: '2018-04-30T22:09:50.997Z',
  environment: ['development'],
  published: false,
};

storiesOf('PublicationStatusEditor', module).add('default', () => (
  <MemoryRouter>
    <PublicationStatusEditor {...storyProps} />
  </MemoryRouter>
));
