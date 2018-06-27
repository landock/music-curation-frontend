import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CurationsCollection from '.';
import { MemoryRouter as Router } from 'react-router-dom';

import { curations } from '../../fixtures/test_data';

storiesOf('CurationsCollection', module).add('default', () => (
  <Router>
    <CurationsCollection curations={curations} />
  </Router>
));
