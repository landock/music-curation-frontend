import React from 'react';
import recycle from 'recycle';
import { Redirect } from 'react-router-dom';

import { Form } from 'semantic-ui-react';
import { types as searchCurationsTypes } from '../../modules/SearchCurations';
import { types as tracksTypes } from '../../modules/Tracks';
import { types as middlewareTypes } from '../../middleware/api';

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

const CurationSearchBar = recycle({
  displayName: 'CurationSearchBar',
  initialState: { searchTerm: '' },
  dispatch(sources) {
    return [
      sources
        .select(Form)
        .addListener('onSubmit')
        .withLatestFrom(sources.state)
        .map(([e, state]) => state)
        .withLatestFrom(sources.props)
        .map(([state, props]) => {
          const { searchTerm } = state;
          return configureAction(props, searchTerm);
        }),
    ];
  },
  update(sources) {
    return [
      sources
        .select(Form.Input)
        .addListener('onChange')
        .reducer((state, e) => {
          state.searchTerm = e.target.value;
          return state;
        }),
    ];
  },
  view(props, state) {
    return (
      <Form>
        <Form.Input
          value={state.searchTerm}
          icon="search"
          placeholder="Search Curations"
        />
      </Form>
    );
  },
});

export default CurationSearchBar;
