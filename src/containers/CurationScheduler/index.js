import React from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import CurationSchedulerView from '../../components/CurationSchedulerView';
import getSelectorStream from '../../getSelectorStream';
import addListenerToElementReducer from '../../reducerThatMapsIdToStateProperty';

import 'rxjs/add/operator/withLatestFrom';
import './CurationScheduler.css';

const CurationScheduler = recycle({
  displayName: 'CurationScheduler',
  initialState: {
    dateStart: '',
    dateEnd: '',
    recommendedTime: 1,
    publicationStatus: 'Draft',
    environment: 'Development',
  },
  dispatch(sources) {
    const formStream = getSelectorStream(sources.select, Form, 'onSubmit');
    return [handleFormSubmit(formStream, sources.state)];
  },
  update(sources) {
    const idSelector = sources.selectId;
    const eventToListenFor = 'onChange';

    const streamsWeNeed = [
      'date-start',
      'date-end',
      'publication-status',
      'environment',
      'recommended-time',
    ].map(id => getSelectorStream(idSelector, id, eventToListenFor));

    return streamsWeNeed.map(stream =>
      stream.reducer(addListenerToElementReducer)
    );
  },
  view(props, state) {
    return new CurationSchedulerView(state);
  },
});

function handleFormSubmit(idSelectorStream, stateStream) {
  if (!idSelectorStream) return;
  return idSelectorStream.withLatestFrom(stateStream).map(([event, state]) => {
    return {
      type: 'UPDATE_CURATION_SCHEDULE',
      payload: {
        ...state,
      },
    };
  });
}

CurationScheduler.propTypes = {
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  scheduled_at: PropTypes.string,
  environment: PropTypes.arrayOf(
    PropTypes.oneOf(['staging', 'production', 'development'])
  ),
  published: PropTypes.bool,
};

export {
  CurationScheduler as default,
  handleFormSubmit,
  getSelectorStream,
  CurationSchedulerView,
  addListenerToElementReducer,
};
