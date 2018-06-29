import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Tag from '.';

it('Tag: default', () => {
  const component = render(<Tag data={{ id: 1, title: 'test' }} />);
  expect(component).toBeTruthy();
});
