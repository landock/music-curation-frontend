import React, { PureComponent } from 'react';
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

export default TagCollection;
