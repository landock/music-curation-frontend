import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Select } from 'semantic-ui-react';
import './CurationScheduler.css';

class CurationScheduler extends PureComponent {
  render() {
    const statusOptions = [
      { value: 'draft', text: 'Draft' },
      { value: 'published', text: 'Published' },
    ];
    const environmentOptions = [
      { value: 'production', text: 'Production' },
      { value: 'development', text: 'Development' },
    ];

    return (
      <Form>
        <Form.Group>
          <Form.Button color="red">Save Curations</Form.Button>
          <Form.Select placeholder="DRAFT" options={statusOptions} />
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
          />
          <Form.Input
            icon="calendar outline"
            iconPosition="left"
            id="date-end"
            type="date"
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
  }
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
