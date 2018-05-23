import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import mockStore from '../../fixtures/mockStore';
import EditCuration from '.';

it('EditCuration: default', () => {
  const component = renderer.create(
    <Provider store={mockStore({ Curations: { currentCuration: {} } })}>
      <EditCuration match={{ params: { id: 2 } }} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
