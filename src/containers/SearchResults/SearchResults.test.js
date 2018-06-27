import { updateReducer } from '.';

describe('SearchResults', () => {
  describe('updateReducer', () => {
    it('should get state or whatever', () => {
      const track = { trackName: 'cats' };
      const mockStore = { Tracks: { searchResults: [track] } };
      const result = updateReducer({}, mockStore);

      expect(result).toHaveProperty('searchResults');
      expect(result.searchResults).toContain(track);
    });
  });
});
