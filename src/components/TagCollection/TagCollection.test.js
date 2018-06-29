import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';

import TagCollection from '.';

it('TagCollection: default', () => {
  const tagTitle = 'Mock';
  const anotherTagTitle = 'Test';
  let tagCollectionProps = {
    tags: [{ id: 1, title: tagTitle }, { id: 2, title: anotherTagTitle }],
  };
  const { queryByText } = render(<TagCollection {...tagCollectionProps} />);
  expect(queryByText(tagTitle)).not.toBeNull();
  expect(queryByText(anotherTagTitle)).not.toBeNull();
});
