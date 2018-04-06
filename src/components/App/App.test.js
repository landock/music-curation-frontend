import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './index';

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it('renders without crashing', () => {
    let tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders welcome message', () => {
    const welcome = <h1 className="App-title">Music Curation</h1>;
    expect(component.contains(welcome)).toBe(true);
  });

  it('should render shit if curations prop exists', () => {
    let name = 'Test fuckin Name';
    let id = '11';
    let curationMarkup = (
      <p>
        {name} - {id}
      </p>
    );
    let artistName = 'George';
    let trackName = 'Ullmer';
    let trackMarkup = (
      <p>
        {artistName} - {trackName}
      </p>
    );

    component.setProps({
      curations: [
        {
          id,
          name,
          imageUrl: 'test',
          tracks: [
            {
              id: 22,
              artistName,
              trackName,
              imageUrl: 'test',
            },
          ],
        },
      ],
    });

    expect(component.contains(curationMarkup));
    expect(component.contains(trackMarkup));
  });

  it('should render placeholder message if no curations are passed as props', () => {
    const placeholderMarkup = <p>No Curations Found</p>;
    expect(component.contains(placeholderMarkup)).toBe(true);
  });
});
