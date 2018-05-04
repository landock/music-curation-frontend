import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import EditCuration from '.';

import { curation } from '../../fixtures/test_data';

storiesOf('EditCuration', module).add('default', () => (
  <EditCuration curation={curation} />
));
