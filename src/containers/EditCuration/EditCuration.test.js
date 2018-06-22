import React from 'react';
import { of } from 'rxjs/observable/of';

import EditCuration, { getDataOnMount, getCurrentCuration } from '.';

describe('EditCuration methods', () => {
  beforeEach(() => {});
  describe('getDataOnMount', () => {
    const id = 1337;
    let mockLifecycleStream = of('componentDidMount');
    let mockPropsStream = of({ match: { params: { id } } });
    it('should return an action object when there are router props passed in', () => {
      const result = getDataOnMount(mockLifecycleStream, mockPropsStream);
      result.subscribe(val => {
        expect(val.payload.url).toBe(`/curations/${id}`);
      });
    });
  });

  describe('getCurrentCuration', () => {
    const id = 578547;
    let mockReducer = jest.fn();
    let mockStoreStream = of({
      CurrentCuration: {
        entities: {
          curations: {
            id,
          },
          tags: {},
        },
      },
    });
    let mockPropsStream = of({ match: { params: { id } } });
    const getCurrentCurationResult = getCurrentCuration(
      mockStoreStream,
      mockPropsStream,
      mockReducer
    );
    expect(mockReducer.mock.calls.length).toBe(1);
    getCurrentCurationResult.subscribe(value => {
      console.log(value);
    });
  });

  describe('getCurrentCurationReducer', () => {});
});
