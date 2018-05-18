import React, { PureComponent } from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';

import { Form, Input } from 'semantic-ui-react';
import './CurationScheduler.css';

const CurationScheduler = recycle({
  dispatch(sources) {
    return [
      sources
        .select(Form)
        .addListener('onSubmit')
        .withLatestFrom(sources.state)
        .map(([event, state]) => {
          return {
            type: 'UPDATE_CURATION_SCHEDULE',
            payload: {
              dateStart: state.dateStart,
              dateEnd: state.dateEnd,
              status: state.publicationStatus,
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
    ];
  },

  view(props, state) {
    const statusOptions = [
      { value: 'Draft', text: 'Draft' },
      { value: 'Published', text: 'Published' },
    ];
    const environmentOptions = [
      { value: 'production', text: 'Production' },
      { value: 'development', text: 'Development' },
    ];

    return (
      <Form>
        <Form.Group>
          <Form.Button type="submit" color="red">
            Save Curations
          </Form.Button>
          <Form.Select
            placeholder="DRAFT"
            id="curation-status"
            options={statusOptions}
            value={state.publicationStatus}
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
            value={state.dateStart}
          />
          <Form.Input
            icon="calendar outline"
            iconPosition="left"
            id="date-end"
            type="date"
            width="8"
            value={state.dateEnd}
          />
        </Form.Group>
        <Form.Input
          label="Recommended Time Slot"
          id="date-start"
          type="range"
          min="0"
          max="24"
          step="1"
        />
        <Form.Select
          placeholder="Copy to"
          label="Environment"
          options={environmentOptions}
        />
      </Form>
    );
  },
});

CurationScheduler.environmentField = React.createRef();
CurationScheduler.whateverInput = props => (
  <Input ref={CurationScheduler.environmentField} {...props} />
);
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
