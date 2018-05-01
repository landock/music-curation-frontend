import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class CurationScheduler extends PureComponent {
  render() {
    return (
      <section>
        <div>
          <span>UPdated:</span>
          <button>Save Curations</button>
          <select>
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>
        <div>
          <span>Schedule:</span>
          <input id="date-start" type="date" />
          <input id="date-end" type="date" />
        </div>
        <div>
          <span>Recommended Time Slot</span>
          <input id="date-start" type="range" min="0" max="24" step="1" />
        </div>
        <div>
          <span>Environment</span>
          <select>
            <option>Production</option>
            <option>Development</option>
          </select>
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
