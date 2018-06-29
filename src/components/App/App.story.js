import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import MockProvider, { getMockStore } from 'redux-mock-provider';
import { storiesOf } from '@storybook/react';

import App from './';
import { tags } from '../../fixtures/test_data';

const curation = {
  id: 123,
  imageUrl: 'http://fpoimg.com/200x200',
  description: 'Real description of curations',
  tracks: [1],
  tags: {},
  name: 'Testing this shit',
};

const store = getMockStore({
  key: 'Curations',
  state: {
    entities: {
      curations: [curation],
      tracks: { 1: { id: 1, trackName: 'Track god' } },
    },
  },
});

storiesOf('App', module)
  .addDecorator(story => {
    return (
      <MockProvider store={store}>
        <Router>{story()}</Router>
      </MockProvider>
    );
  })
  .add('default', () => <App tags={tags} />);
