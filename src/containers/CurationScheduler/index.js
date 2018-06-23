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
    const id = 'curation-scheduler';
    return [handleFormSubmit(sources.selectId, id, sources.state)];
  },

  update(sources) {
    const idSelector = sources.selectId;
    const eventToListenFor = 'onChange';
    return [
      addListenerToElement(idSelector, 'date-end', eventToListenFor),
      addListenerToElement(idSelector, 'date-start', eventToListenFor),
      addListenerToElement(idSelector, 'publication-status', eventToListenFor),
      addListenerToElement(idSelector, 'environment', eventToListenFor),
    ];
  },

  view(props, state) {
    return CurationSchedulerView(state);
  },
});

function handleFormSubmit(idSelectorStream, id, stateStream) {
  return idSelectorStream(id)
    .addListener('onSubmit')
    .withLatestFrom(stateStream)
    .map(([event, state]) => {
      return {
        type: 'UPDATE_CURATION_SCHEDULE',
        payload: {
          ...state,
        },
      };
    });
}

function addListenerToElement(idSelectorStream, id, eventName) {
  return idSelectorStream(id)
    .addListener(eventName)
    .reducer(addListenerToElementReducer(id));
}

function addListenerToElementReducer(id) {
  return (state, e) => {
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
          id="curation-status"
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
  addListenerToElement,
  CurationSchedulerView,
};
