import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MockProvider, { getMockStore } from 'redux-mock-provider';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Curation from '.';

const store = getMockStore({
  key: 'CurrentCuration',
  state: { entities: { tracks: { 1: { id: 1, trackName: 'Track god' } } } },
});
const curation = {
  id: 123,
  imageUrl: 'http://fpoimg.com/200x200',
  description: 'Real description of curations',
  tracks: [1],
  tags: {},
  name: 'Testing this shit',
};
storiesOf('Curation', module).add('default', () => (
  <MockProvider store={store}>
    <Router>
      <Curation curation={curation} />
    </Router>
  </MockProvider>
));
