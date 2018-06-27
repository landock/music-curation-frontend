import React from 'react';
import recycle from 'recycle';
import { Form } from 'semantic-ui-react';

import getSelectorStream from '../../getSelectorStream';
import addListenerToElementReducer from '../../reducerThatMapsIdToStateProperty';
import { types as searchCurationsTypes } from '../../modules/SearchCurations';
import { types as tracksTypes } from '../../modules/Tracks';
import { getData } from '../../middleware/api';

const CurationSearchBar = recycle({
  displayName: 'CurationSearchBar',
  initialState: { searchTerm: '' },
  dispatch(sources) {
    const formStream = getSelectorStream(sources.select, Form, 'onSubmit');
    return [handleSubmit(formStream, sources.state, sources.props)];
  },
  update(sources) {
    const inputStream = getSelectorStream(
      sources.selectId,
      'search-term',
      'onChange'
    );
    return [inputStream.reducer(addListenerToElementReducer)];
  },
  view(props, state) {
    return new CurationSearchBarView(state);
  },
});
function CurationSearchBarView({ searchTerm }) {
  return (
    <Form>
      <Form.Input
        id="search-term"
        value={searchTerm}
        icon="search"
        placeholder="Search Curations"
      />
    </Form>
  );
}

function handleSubmit(selectorStream, stateStream, propsStream) {
  return selectorStream
    .withLatestFrom(stateStream)
    .map(([e, state]) => state)
    .withLatestFrom(propsStream)
    .map(([state, props]) => {
      const { searchTerm } = state;
      return configureAction(props, searchTerm);
    });
}

function configureAction(props, searchTerm) {
  let url = `/search/${searchTerm}`;
  let nextActionType = tracksTypes.TRACKS_FETCHED;

  if (!props.match) {
    nextActionType = searchCurationsTypes.SEARCH_CURATIONS_FETCHED;
    url = `/searchCurations/${searchTerm}`;
  }

  return getData(url, nextActionType);
}

export { CurationSearchBar as default, handleSubmit, configureAction };
