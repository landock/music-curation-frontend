import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Tag from '.'

storiesOf('Tag', module).add('default', () => <Tag data={{id: 1, title: 'whatever'}} />)
