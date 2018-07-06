import recycle from 'recycle';

import handleSubmit from './handleSubmit';
import CurationSearchBarView from './CurationSearchBarView';
import getSelectorStream from '../../getSelectorStream';
import addListenerToElementReducer from '../../reducerThatMapsIdToStateProperty';

function dispatch(sources) {
  const formStream = getSelectorStream(
    sources.selectId,
    'search-form',
    'onSubmit'
  );
  const handleSubmitResult = handleSubmit(
    formStream,
    sources.state,
    sources.props
  );
  return [handleSubmitResult];
}

function update(sources) {
  const inputStream = getSelectorStream(
    sources.selectId,
    'search-term',
    'onChange'
  );
  return [inputStream.reducer(addListenerToElementReducer)];
}

function view(props, state) {
  return new CurationSearchBarView(state);
}

const CurationSearchBar = recycle({
  displayName: 'CurationSearchBar',
  initialState: { searchTerm: '' },
  dispatch,
  update,
  view,
});

export { CurationSearchBar as default, view, update, dispatch };
