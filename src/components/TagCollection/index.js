import React, { PureComponent } from 'react';
import Tag from '../Tag';

class TagCollection extends PureComponent {
  render() {
    const { tags } = this.props;
    console.log('tagscollection', tags);
    const tagsMarkup = tags ? (
      Object.keys(tags).map(id => <Tag key={id} data={tags[id]} />)
    ) : (
      <span>No tags</span>
    );
    return tagsMarkup;
  }
}

export default TagCollection;
