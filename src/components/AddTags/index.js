import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TagCollection from '../TagCollection';
class AddTags extends PureComponent {
  render() {
    return (
      <div>
        <p>Add tags</p>
        <TagCollection tags={this.props.tags} />
      </div>
    );
  }
}

AddTags.propTypes = {
  tags: PropTypes.array,
};

export default AddTags;
