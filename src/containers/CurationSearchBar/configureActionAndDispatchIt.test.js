import configureActionAndDispatchIt from './configureActionAndDispatchIt';

import { types as searchCurationsTypes } from '../../modules/SearchCurations';
import { types as middlewareTypes } from '../../middleware/api';

it('should', () => {
  const props = {};
  const searchTerm = 'spine';

  const result = configureActionAndDispatchIt(props, searchTerm);
  expect(result).toMatchObject({
    type: middlewareTypes.API_REQUEST,
    action: searchCurationsTypes.SEARCH_CURATIONS_FETCHED,
    payload: {
      url: expect.any(String),
    },
  });
  expect(result.payload.url).toContain(searchTerm);
});
