import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TagCollection from '../TagCollection';
import { Header } from 'semantic-ui-react';
class AddTags extends PureComponent {
  render() {
    return (
      <div>
        <Header as="h5" content="Tags" />
        <div>
          <p>Add Tags</p>
          <TagCollection tags={this.props.tags} />
        </div>
      </div>
    );
  }
}

AddTags.propTypes = {
  tags: PropTypes.array,
};

export default AddTags;
