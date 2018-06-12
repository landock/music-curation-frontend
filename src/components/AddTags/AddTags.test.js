import React from 'react';
import { render } from 'react-testing-library';
import AddTags from '.';

it('AddTags: default', () => {
  const { container } = render(<AddTags />);
  let whatthefuck = container.querySelector('.header');
  console.log(whatthefuck);
});
