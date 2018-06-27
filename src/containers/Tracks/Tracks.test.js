import {
  getTracksFromStore,
  getTrackNamesFromStoreCollection,
  getTrackNamesReducer,
} from '.';

describe('Tracks', () => {
  describe('getTrackNamesFromStoreCollection', () => {
    it('should return a trackName when an id of an existing track is passed in', () => {
      const trackName = 'so reborn';
      const mockCollection = [
        { entities: { tracks: { 1: { id: 1, trackName } } } },
      ];
      const result = getTrackNamesFromStoreCollection(1, mockCollection);
      expect(result).toBe(trackName);
    });
  });
  describe('getTrackNamesReducer', () => {
    it('should get fucking tracks', () => {
      const mockProps = { ids: [1] };
      const trackName = 'artificial';
      const mockStore = {
        CurrentCuration: {
          entities: { tracks: { 1: { id: 1, trackName } } },
        },
        SearchCurations: { entities: { tracks: {} } },
        Curations: { entities: { tracks: {} } },
      };
      const mockState = {};
      const result = getTrackNamesReducer(mockState, [mockProps, mockStore]);

      expect(result).toHaveProperty('tracks');
      expect(result.tracks).toContain(trackName);
    });
  });
});
