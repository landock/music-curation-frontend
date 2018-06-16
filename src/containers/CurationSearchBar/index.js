import React from 'react';
import recycle from 'recycle';
import { Form } from 'semantic-ui-react';
import { types as tracksTypes } from '../../modules/Tracks';
import { types as middlewareTypes } from '../../middleware/api';

const CurationSearchBar = recycle({
  displayName: 'CurationSearchBar',
  initialState: { searchTerm: '' },
  dispatch(sources) {
    return [
      sources
        .select(Form)
        .addListener('onSubmit')
        .withLatestFrom(sources.state)
        .map(([e, state]) => {
          const { searchTerm } = state;
          return {
            type: middlewareTypes.API_REQUEST,
            nextActionType: tracksTypes.TRACKS_FETCHED,
            payload: {
              url: `/search/${searchTerm}`,
            },
          };
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
