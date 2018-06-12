import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
// import TagCollection from '.';
it('TagCollection: default', () => {
  let tagCollectionProps = {
    tags: [{ id: 1, title: 'Mock' }, { id: 2, title: 'Test' }],
  };
  // const component = renderer.create(<TagCollection {...tagCollectionProps} />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
