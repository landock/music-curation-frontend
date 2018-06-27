import React from 'react';
import renderer from 'react-test-renderer';
import { getCurrentTracksReducer } from '.';

describe('CurrentCurationTracks', () => {
  describe('getCurrentTracksReducer', () => {
    it('should return a state object with shit from the store', () => {
      const id = 1337;
      const mockState = {};
      const mockStore = {
        CurrentCuration: { entities: { tracks: { 1: { id } } } },
      };
      const result = getCurrentTracksReducer(mockState, mockStore);
      console.log(result);
      expect(result.searchResults[0]).toEqual(
        expect.objectContaining({
          id,
        })
      );
    });
  });
});
