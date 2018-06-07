import React from 'react';
import recycle from 'recycle';
import { forkJoin } from 'rxjs/observable/forkJoin';

import 'rxjs/add/operator/last';
import 'rxjs/add/operator/takeWhile';

const Tracks = recycle({
  dispatch(sources) {
    return [];
  },
  update(sources) {
    return [
      sources.lifecycle
        .takeWhile(e => e === 'componentDidMount')
        .withLatestFrom(sources.props)
        .map(val => val[1])
        .withLatestFrom(sources.store)
        .reducer((state, [props, store]) => {
          let trackData = props.ids.map(
            id => store.Curations.entities.tracks[id]
          );
          state.tracks = trackData;
          return state;
        }),
    ];
  },
  view(props, state) {
    if (!state.tracks) return null;
    const trackNames = state.tracks.map(track => track.trackName);
    return <p>{trackNames.join(', ')}</p>;
  },
});

export default Tracks;
