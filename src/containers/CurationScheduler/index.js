import React from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';

import { Form } from 'semantic-ui-react';

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

    const dateStartId = 'date-start';
    const dateStartStream = getSelectorStream(
      idSelector,
      dateStartId,
      eventToListenFor
    );
    const dateStartReducer = addListenerToElementReducer(dateStartId);

    const dateEndId = 'date-end';
    const dateEndStream = getSelectorStream(
      idSelector,
      dateEndId,
      eventToListenFor
    );
    const dateEndReducer = addListenerToElementReducer(dateEndId);

    const publicationStatusId = 'publication-status';
    const publicationStatusStream = getSelectorStream(
      idSelector,
      publicationStatusId,
      eventToListenFor
    );
    const publicationStatusReducer = addListenerToElementReducer(
      publicationStatusId
    );

    const environmentId = 'environment';
    const environmentStream = getSelectorStream(
      idSelector,
      environmentId,
      eventToListenFor
    );
    const environmentReducer = addListenerToElementReducer(environmentId);

    const recommendedTimeId = 'recommended-time';
    const recommendedTimeStream = getSelectorStream(
      idSelector,
      recommendedTimeId,
      eventToListenFor
    );
    const recommendedTimeReducer = addListenerToElementReducer(
      recommendedTimeId
    );
    return [
      dateEndStream.reducer(dateEndReducer),
      dateStartStream.reducer(dateStartReducer),
      publicationStatusStream.reducer(publicationStatusReducer),
      environmentStream.reducer(environmentReducer),
      recommendedTimeStream.reducer(recommendedTimeReducer),
    ];
  },

  view(props, state) {
    return CurationSchedulerView(state);
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

function getSelectorStream(selectorFunc, selectorArg, eventName) {
  if (!selectorFunc) return;
  return selectorFunc(selectorArg).addListener(eventName);
}

function addListenerToElementReducer(id) {
  if (!id) return;
  return function(state, e) {
    if (!e) return;
    let camelCaseId = camelCase(id);
    console.log(camelCaseId);
    return {
      ...state,
      [camelCaseId]: e.target.value || e.target.innerText,
    };
  };
}

function CurationSchedulerView({
  dateStart,
  dateEnd,
  publicationStatus,
  recommendedTime,
  environment,
}) {
  const statusOptions = [
    { value: 'Draft', text: 'Draft' },
    { value: 'Published', text: 'Published' },
  ];

  const environmentOptions = [
    { value: 'Production', text: 'Production' },
    { value: 'Development', text: 'Development' },
  ];

  return (
    <Form id="curation-scheduler">
      <Form.Group>
        <Form.Button type="submit" color="red">
          Save Curations
        </Form.Button>
        <Form.Select
          placeholder="DRAFT"
          id="publication-status"
          options={statusOptions}
          defaultValue={publicationStatus}
        />
      </Form.Group>
      <p>
        <strong>Schedule</strong>
      </p>
      <Form.Group>
        <Form.Input
          icon="calendar outline"
          iconPosition="left"
          id="date-start"
          type="date"
          width="8"
          defaultValue={dateStart}
        />
        <Form.Input
          icon="calendar outline"
          iconPosition="left"
          id="date-end"
          type="date"
          width="8"
          defaultValue={dateEnd}
        />
      </Form.Group>
      <Form.Input
        label="Recommended Time Slot"
        id="recommended-time"
        type="range"
        min="0"
        max="24"
        step="1"
        defaultValue={recommendedTime}
      />
      <Form.Select
        id="environment"
        placeholder="Copy to"
        label="Environment"
        options={environmentOptions}
        defaultValue={environment}
      />
    </Form>
  );
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
