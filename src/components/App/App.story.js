import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import MockProvider from 'redux-mock-provider';
import { storiesOf } from '@storybook/react';

import App from './';
import { tags } from '../../fixtures/test_data';
import mockStore from '../../fixtures/mockStore';

const curation = {
  id: 123,
  imageUrl: 'http://fpoimg.com/200x200',
  description: 'Real description of curations',
  tracks: [1],
  tags: {},
  name: 'Testing this shit',
};
const curations = [curation];
const tracks = { 1: { id: 1, trackName: 'Track god' } };

const store = mockStore({
  Curations: {
    entities: {
      curations,
      tracks,
    },
  },
  CurrentCurations: {
    entities: {
      curations,
      tracks,
    },
  },
});

storiesOf('App', module)
  .addDecorator(story => {
    console.log('app store', store);
    return (
      <MockProvider store={store}>
        <Router>{story()}</Router>
      </MockProvider>
    );
  })
  .add('default', () => <App tags={tags} />);
