import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CurationFilterSubHeader from '.';
import { tags } from '../../fixtures/test_data';

storiesOf('CurationFilterSubHeader', module).add('default', () => (
  <CurationFilterSubHeader tags={tags} />
));
