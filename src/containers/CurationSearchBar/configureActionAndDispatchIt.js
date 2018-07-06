import { types as searchCurationsTypes } from '../../modules/SearchCurations';
import { types as tracksTypes } from '../../modules/Tracks';
import { getData } from '../../middleware/api';

export default function configureActionAndDispatchIt(props, searchTerm) {
  let url = `/search/${searchTerm}`;
  let nextActionType = tracksTypes.TRACKS_FETCHED;

  if (!props.match) {
    nextActionType = searchCurationsTypes.SEARCH_CURATIONS_FETCHED;
    url = `/searchCurations/${searchTerm}`;
  }

  return getData(url, nextActionType);
}
