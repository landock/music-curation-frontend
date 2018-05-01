import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

class TagCollection extends PureComponent {
  render() {
    const { tags } = this.props;
    const tagsMarkup = tags ? (
      tags.map(tag => <Tag key={tag.id} data={tag} />)
    ) : (
      <span>No tags</span>
    );
    return tagsMarkup;
  }
}

TagCollection.propTypes = {
  tags: PropTypes.array,
};

export default TagCollection;
