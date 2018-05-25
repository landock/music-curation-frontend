import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import PublicationStatusEditor from '.';

it('PublicationStatusEditor: default', () => {
  let storyProps = {
    created_at: '2018-04-30T22:09:50.997Z',
    updated_at: '2018-04-30T22:09:50.997Z',
    scheduled_at: '2018-04-30T22:09:50.997Z',
    environment: ['development'],
    published: false,
  };
  // const component = renderer.create(
  //   <PublicationStatusEditor {...storyProps} />
  // );
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
