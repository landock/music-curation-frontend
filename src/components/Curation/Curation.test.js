import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Curation from '.';

it('renders correctly', () => {
  let mockCuration = {
    id: 1,
    imageUrl: 'http://fpoimg.com/200x200',
    description: 'whatever description here',
    tracks: [
      {
        imageUrl: 'http://fpoimg.com/100x100',
        artistName: 'QA Dougie Test',
        trackName: 'testin shit',
        durationInSeconds: 123233,
        recordLabels: ['warner bros', 'heathcliff the cat and record label'],
      },
    ],
    name: 'Sprint 14 remix',
  };
  const component = shallow(<Curation curation={mockCuration} />);

  expect(component.text()).toEqual('<Item />');
});
