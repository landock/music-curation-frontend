import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input, Button, Select } from 'semantic-ui-react';
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
      <section>
        <div>
          <label>Updated:</label>
          <Button color="red">Save Curations</Button>
          <Select options={statusOptions} />
        </div>
        <div>
          <label>Schedule:</label>
          <Input
            icon="calendar outline"
            iconPosition="left"
            id="date-start"
            type="date"
          />
          <Input
            icon="calendar outline"
            iconPosition="left"
            id="date-end"
            type="date"
          />
        </div>
        <div>
          <label>Recommended Time Slot</label>
          <Input id="date-start" type="range" min="0" max="24" step="1" />
        </div>
        <div>
          <label>Environment</label>
          <Select options={environmentOptions} />
        </div>
      </section>
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
