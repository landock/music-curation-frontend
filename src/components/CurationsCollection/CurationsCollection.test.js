import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
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
    curations: [
      {
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
    ],
  };

  beforeEach(() => {
    const renderResult = render(
      <Provider store={mockStore(testCurations)}>
        <CurationsCollection curations={testCurations} />
      </Provider>
    );
    container = renderResult.container;
    getByText = renderResult.getByText;
    queryByText = renderResult.queryByText;
    debug = renderResult.debug;
  });

  it('should render placeholder message if no curations are passed as props', () => {
    const placeholderMarkup = 'No Curations Found';

    expect(queryByText(placeholderMarkup)).toBe(true);
  });

  it('should render curation image', () => {
    expect(component.find('img').length).toBe(1);
  });

  it('should render curation name ', () => {
    const expectedComponentText = curationName;
    const componentText = component
      .find('.header')
      .text()
      .trim();

    expect(componentText).toEqual(expectedComponentText);
  });

  it("should render 'artist - track name'", () => {
    const componentText = component
      .find('em')
      .text()
      .trim();

    expect(componentText).toEqual(trackName);
  });
});
