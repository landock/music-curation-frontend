import React, { Component } from 'react';
import recycle from 'recycle';

import './AppContainer.css';
import App from '../../components/App';

const AppContainer = recycle({
  displayName: 'AppContainer',
  update(sources) {
    return [
      sources.store.reducer(function(state, store) {
        state.curations =
          store.Curations.entities && store.Curations.entities.curations;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <App />;
  },
});

export default AppContainer;
