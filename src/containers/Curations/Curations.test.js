import { of } from 'rxjs/observable/of';

import {
  getSearchCurationsFromStore,
  getCurationsOnMount,
  stateReducer,
} from '.';
import { getCurations } from '../../api';

describe('Curations', () => {
  describe('getSearchCurationsFromStore', () => {
    it('should return a state object', () => {
      const mockReducer = jest.fn();
      const mockStoreStream = of({
        Curations: { entities: { curations: {} } },
        SearchCurations: { entities: { curations: {} } },
      });
      const result = getSearchCurationsFromStore(mockStoreStream, mockReducer);

      result.subscribe(value => {
        expect(value.reducer).toBe(mockReducer);
      });
    });
  });

  describe('getCurationsOnMount', () => {
    it('should return an action object to request data on mount', () => {
      const mockLifecycleStream = of('componentDidMount');
      const result = getCurationsOnMount(mockLifecycleStream);
      const actionObject = {
        type: expect.any(String),
        nextActionType: expect.any(String),
        payload: expect.any(Object),
      };

      result.subscribe(value => {
        expect(value).toMatchObject(actionObject);
      });
    });
  });

  describe('stateReducer', () => {
    it('should return a state object with curations from the store', () => {
      const mockState = {};
      const mockStore = {
        Curations: { entities: { curations: {} } },
        SearchCurations: { entities: { curations: {} } },
      };
      const result = stateReducer(mockState, mockStore);

      expect(result).toMatchObject({
        curations: expect.any(Object),
        searchCurations: expect.any(Object),
      });
    });
  });
});
