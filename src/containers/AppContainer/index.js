import React from 'react';
import recycle from 'recycle';

import './AppContainer.css';
import App from '../../components/App';
import { types as tagsTypes } from '../../modules/Tags';
import { getData } from '../../middleware/api';

const AppContainer = recycle({
  displayName: 'AppContainer',
  initialState: {
    tags: null,
  },
  dispatch(sources) {
    return [
      sources.lifecycle
        .filter(e => e === 'componentDidMount')
        .map(() => getData('/tags', tagsTypes.TAGS_FETCHED)),
    ];
  },
  update(sources) {
    return [
      sources.store.reducer(function(state, store) {
        state.tags = store.Tags && store.Tags.tags;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <App tags={state.tags} />;
  },
});

export default AppContainer;
