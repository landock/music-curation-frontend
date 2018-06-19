import React from 'react';
import recycle from 'recycle';
import { map, filter, withLatestFrom } from 'rxjs/operators';
import { sortBy } from 'lodash';
import TracksView from '../../components/TracksView';

const Tracks = recycle({
  displayName: 'Tracks',
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

    return [getTracksFromStore(sources)];
  },

  view(props, state) {
    return <TracksView tracks={state.tracks} />;
  },
});

function getTracksFromStore(sources) {
  if (!sources.store) return null;

  return sources.lifecycle
    .pipe(
      filter(
        e => e === 'componentDidMount' || e === 'componentWillReceiveProps'
      ),
      withLatestFrom(sources.props),
      map(([e, props]) => props),
      withLatestFrom(sources.store)
    )
    .reducer(getTrackNamesReducer);
}

function getTrackNamesFromStoreCollection(id, stores) {
  let track = stores
    .filter(store => store.entities.tracks[id])
    .map(store => store.entities.tracks[id])[0];
  return track.trackName;
}

function getTrackNamesReducer(state, [props, store]) {
  const { CurrentCuration, Curations, SearchCurations } = store;
  const storesWithEntities = [
    CurrentCuration,
    Curations,
    SearchCurations,
  ].filter(store => store.entities);

  let trackData = props.ids.map(id => {
    return getTrackNamesFromStoreCollection(id, storesWithEntities);
  });
  state.tracks = sortBy(trackData, ['trackName']);
  return state;
}

export default Tracks;
