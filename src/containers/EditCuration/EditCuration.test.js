import React from 'react';
import { of } from 'rxjs/observable/of';

import {
  getDataOnMount,
  getCurrentCuration,
  getCurrentCurationReducer,
} from '.';

describe('EditCuration methods', () => {
  describe('getDataOnMount', () => {
    it('should return an action object when there are router props passed in', () => {
      const id = 1337;
      let mockLifecycleStream = of('componentDidMount');
      let mockPropsStream = of({ match: { params: { id } } });
      const result = getDataOnMount(mockLifecycleStream, mockPropsStream);
      result.subscribe(val => {
        expect(val.payload.url).toBe(`/curations/${id}`);
      });
    });
  });

  describe('getCurrentCuration', () => {
    it('should get the current curation with an id', () => {
      const id = 578547;
      let mockReducer = jest.fn();
      // mockReducer.mockReturnValue(of({ currentCuration: { id } }));

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
      getCurrentCurationResult.subscribe(value => {
        const CurrentCuration = value.event[0].CurrentCuration;
        expect(CurrentCuration.entities.curations.id).toBe(id);
        expect(value.reducer).toBe(mockReducer);
      });
    });
  });

  describe('getCurrentCurationReducer', () => {
    it('should return state or something', () => {
      const id = 5388;
      const tags = [{ id: 1, title: 'test' }];
      let mockStore = {
        CurrentCuration: {
          entities: {
            curations: {
              [id]: { id },
              tags: {},
            },
            tags,
          },
        },
      };
      let mockProps = { match: { params: { id } } };
      let mockState = {};
      let result = getCurrentCurationReducer(mockState, [mockStore, mockProps]);

      expect(result.currentCuration.id).toBe(id);
      expect(result.currentCuration.tags).toBe(tags);
    });
  });
});
