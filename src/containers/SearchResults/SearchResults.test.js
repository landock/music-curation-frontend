import { reducerCallback } from '.';

describe('SearchResults', () => {
  describe('reducerCallback', () => {
    it('should get state or whatever', () => {
      const track = { trackName: 'cats' };
      const mockStore = { Tracks: { searchResults: [track] } };
      const result = reducerCallback({}, mockStore);

      expect(result).toHaveProperty('searchResults');
      expect(result.searchResults).toContain(track);
    });
  });
});
