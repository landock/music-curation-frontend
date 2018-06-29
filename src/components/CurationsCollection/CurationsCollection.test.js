import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import CurationsCollection from './index';

import mockStore from '../../fixtures/mockStore';

describe('CurationsCollection', () => {
  let container, getByText, queryByText, debug;
  const id = 1;
  const curationName = 'test';
  const imageUrl = 'https://testurl.com/image.jpg';
  const artistName = 'test';
  const trackName = 'test track';
  const testCurations = {
    curations: {
      1: {
        id: 1,
        type: 1,
        name: curationName,
        imageUrl,
        description: 'test description',
        tracks: [
          {
            id: 0,
            externalId: '54219314',
            artistName,
            trackName,
            durationInSeconds: 174,
            streamUrl: 'http://www.dev.com/api/Track/Stream?trackId=54219314',
            imageUrl: 'https://placeimg.com/200/200/people/grayscale',
          },
        ],
      },
    },
  };

  it('should render placeholder message if no curations are passed as props', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <CurationsCollection />
      </MemoryRouter>
    );
    const placeholderMarkup = 'No Curations';
    const element = queryByText(placeholderMarkup);

    expect(element).toBeTruthy();
  });

  it('should render curation image', () => {
    const { container } = render(
      <MemoryRouter>
        <CurationsCollection curations={testCurations} />
      </MemoryRouter>
    );
    expect(container.getElementsByTagName('img').length).toBe(1);
  });

  it('should render curation name ', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <CurationsCollection curations={testCurations} />
      </MemoryRouter>
    );
    const expectedComponentText = queryByText('development');

    expect(expectedComponentText).not.toBe(false);
  });
});
