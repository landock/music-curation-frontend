import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import CurationSearchBar from '.'

storiesOf('CurationSearchBar', module).add('default', () => <CurationSearchBar />)