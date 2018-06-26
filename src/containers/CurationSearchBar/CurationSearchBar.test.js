import { configureAction, handleSubmit } from '.';

describe('CurationSearchBar', () => {
  describe('configureAction', () => {
    it('should return an action configured with a search api url based on the search term', () => {
      const mockProps = {};
      const searchTerm = 'beagles al dente';
      const result = configureAction(mockProps, searchTerm);
      expect(result.payload.url).toContain(searchTerm);
    });
  });
});
