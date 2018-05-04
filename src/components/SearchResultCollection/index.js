import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from '../SearchResultCard';
import { Item } from 'semantic-ui-react';

class SearchResultCollection extends PureComponent {
  render() {
    let markup =
      this.props.searchResults &&
      this.props.searchResults.map(result => <SearchResultCard {...result} />);
    return markup ? (
      <Item.Group>{markup}</Item.Group>
    ) : (
      <p>no search results</p>
    );
  }
}

SearchResultCollection.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultCollection;
