import React from 'react';
import recycle from 'recycle';
import { map, filter, withLatestFrom } from 'rxjs/operators';

function getTrackNamesReducer(state, [props, store]) {
  console.log('getTrackNamesReducer', props, store);
  let trackData = props.ids.map(
    id => store.Curations.entities.tracks[id].trackName
  );
  state.tracks = trackData;
  return state;
}

const Tracks = recycle({
  dispatch(sources) {
    return [];
  },

  update(sources) {
    // TODO: Move to 'the other side' component
    //
    // let testPipe = sources.store
    //   .pipe(
    //     map(store => store.Curations.entities.tracks),
    //     tap(n => console.log('testpipe', n)),
    //     distinctUntilChanged()
    //   )
    //   .reducer((state, tracks) => {
    //     console.log(state, tracks);
    //     state.tracks = Object.keys(tracks).map(id => tracks[id].trackName);
    //     console.log(state);
    //     return state;
    //   });
    //
    const getTracksFromStore = sources.lifecycle.pipe(
      filter(
        e => e === 'componentDidMount' || e === 'componentWillReceiveProps'
      ),
      withLatestFrom(sources.props),
      map(val => val[1]),
      withLatestFrom(sources.store)
    );

    return [getTracksFromStore.reducer(getTrackNamesReducer)];
  },

  view(props, state) {
    if (!state.tracks) return <p>No tracks available.</p>;
    return <p>{state.tracks.join(', ')}</p>;
  },
});

export default Tracks;
