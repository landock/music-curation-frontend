import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input, Button, Select } from 'semantic-ui-react';

class CurationScheduler extends PureComponent {
  render() {
    const selectOptions = [
      { value: 'draft', text: 'Draft' },
      { value: 'published', text: 'Published' },
    ];
    const otherSelectOptions = [
      { value: 'production', text: 'Production' },
      { value: 'development', text: 'Development' },
    ];

    return (
      <section>
        <div>
          <span>UPdated:</span>
          <Button color="red">Save Curations</Button>
          <Select options={selectOptions} />
        </div>
        <div>
          <span>Schedule:</span>
          <Input id="date-start" type="date" />
          <Input id="date-end" type="date" />
        </div>
        <div>
          <span>Recommended Time Slot</span>
          <Input id="date-start" type="range" min="0" max="24" step="1" />
        </div>
        <div>
          <span>Environment</span>
          <Select options={otherSelectOptions} />
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
