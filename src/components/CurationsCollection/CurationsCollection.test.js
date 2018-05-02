import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import CurationsCollection from '.';

describe('CurationsCollection', () => {
  let component;

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
  it('Render without crashing', () => {
    component = renderer.create(<CurationsCollection />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render placeholder message if no curations are passed as props', () => {
    component = shallow(<CurationsCollection />);
    const placeholderMarkup = <p>No Curations Found</p>;
    expect(component.contains(placeholderMarkup)).toBe(true);
  });

  it('should render curation image', () => {
    component = mount(<CurationsCollection curations={testCurations} />);

    expect(component.find('img').length).toBe(1);
  });

  it('should render curation name ', () => {
    component = mount(<CurationsCollection curations={testCurations} />);
    const expectedComponentText = curationName;
    console.log(component.debug());
    const componentText = component
      .find('.curation-name')
      .text()
      .trim();
    expect(componentText).toEqual(expectedComponentText);
  });

  it("should render 'artist - track name'", () => {
    let expectedText = `Tracks: ${trackName}`;
    component = mount(<CurationsCollection curations={testCurations} />);

    const componentText = component
      .find('p')
      .text()
      .trim();

    expect(componentText).toEqual(expectedText);
  });
});
