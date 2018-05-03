import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Curation from '.';
import { curation } from '../../fixtures/test_data';

storiesOf('Curation', module).add('default', () => (
  <Curation curation={curation} />
));
