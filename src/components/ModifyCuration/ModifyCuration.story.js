import React from 'react';

import { MemoryRouter as Router } from 'react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ModifyCuration from '.';

storiesOf('ModifyCuration', module)
  .addDecorator(story => {
    return <Router>{story()}</Router>;
  })
  .add('default', () => <ModifyCuration />);
