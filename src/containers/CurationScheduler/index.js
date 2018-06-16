import React from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';

import { Form, Input } from 'semantic-ui-react';

import 'rxjs/add/operator/withLatestFrom';
import './CurationScheduler.css';

const CurationScheduler = recycle({
  displayName: 'CurationScheduler',
  initialState: {
    dateStart: '',
    dateEnd: '',
    recommendedTime: '',
    publicationStatus: 'Draft',
    environment: 'Development',
  },
  dispatch(sources) {
    return [
      sources
        .selectId('curation-scheduler')
        .addListener('onSubmit')
        .withLatestFrom(sources.state)
        .map(([event, state]) => {
          const { dateStart, dateEnd, status, environment } = state;
          return {
            type: 'UPDATE_CURATION_SCHEDULE',
            payload: {
              dateStart,
              dateEnd,
              status,
              environment,
            },
          };
        }),
    ];
  },

  update(sources) {
    return [
      sources
        .selectId('date-start')
        .addListener('onChange')
        .reducer((state, e) => {
          return {
            ...state,
            dateStart: e.target.value,
          };
        }),
      sources
        .selectId('date-end')
        .addListener('onChange')
        .reducer((state, e) => {
          return {
            ...state,
            dateEnd: e.target.value,
          };
        }),
      sources
        .selectId('curation-status')
        .addListener('onChange')
        .reducer((state, e) => {
          return {
            ...state,
            publicationStatus: e.target.innerText,
          };
        }),
      sources
        .selectId('environment')
        .addListener('onChange')
        .reducer((state, e) => {
          return {
            ...state,
            environment: e.target.innerText,
          };
        }),
    ];
  },

  view(props, state) {
    return CurationSchedulerView(state);
  },
});

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
          value={publicationStatus}
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
        value={recommendedTime}
      />
      <Form.Select
        id="environment"
        placeholder="Copy to"
        label="Environment"
        options={environmentOptions}
        value={environment}
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

export default CurationScheduler;
