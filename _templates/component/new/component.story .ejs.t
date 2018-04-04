---
to: src/components/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.story.js
---
<% const comp = h.pascalCase(name) -%>
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import <%= comp %> from '.'

storiesOf('<%= comp %>', module).add('default', () => <<%= comp %> />)