import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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

CurationSchedulerView.propTypes = {
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  publicationStatus: PropTypes.string,
  recommendedTime: PropTypes.string,
  environment: PropTypes.string,
};

export default CurationSchedulerView;
