import React from 'react';
import recycle from 'recycle';
import { Form } from 'semantic-ui-react';

import getSelectorStream from '../../getSelectorStream';
import addListenerToElementReducer from '../../reducerThatMapsIdToStateProperty';
import { types as searchCurationsTypes } from '../../modules/SearchCurations';
import { types as tracksTypes } from '../../modules/Tracks';
import { types as middlewareTypes } from '../../middleware/api';

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
    return (
      <Form>
        <Form.Input
          id="search-term"
          value={state.searchTerm}
          icon="search"
          placeholder="Search Curations"
        />
      </Form>
    );
  },
});

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
  let action = {
    type: middlewareTypes.API_REQUEST,
    nextActionType: tracksTypes.TRACKS_FETCHED,
    payload: {
      url: `/search/${searchTerm}`,
    },
  };

  if (!props.match) {
    action.nextActionType = searchCurationsTypes.SEARCH_CURATIONS_FETCHED;
    action.payload.url = `/searchCurations/${searchTerm}`;
  }

  return action;
}

export { CurationSearchBar as default, handleSubmit, configureAction };
