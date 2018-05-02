import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class AddToCuration extends PureComponent {
  render() {
    const markup = this.props.curations ? (
      this.props.curations.map((curation, index) => (
        <div key={index}>
          <input value={curation} type="radio" name="curations" />
          <label>{curation}</label>
        </div>
      ))
    ) : (
      <p>No curations available</p>
    );
    return (
      <div>
        <span>Add to:</span>
        <div>
          <input type="search" placeholder="Search" />
        </div>
        {markup}
      </div>
    );
  }
}

AddToCuration.propTypes = {
  curations: PropTypes.arrayOf(PropTypes.string),
};

export default AddToCuration;
