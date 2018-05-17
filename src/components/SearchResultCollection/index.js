import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from '../SearchResultCard';
import { Item, Header } from 'semantic-ui-react';
import { tracks as searchResults } from '../../fixtures/test_data';

class SearchResultCollection extends PureComponent {
  render() {
    let markup =
      this.props.searchResults &&
      this.props.searchResults.map(result => <SearchResultCard {...result} />);
    return markup ? (
      <Item.Group textAlign="left">
        <Header>Search Results</Header> <p>{searchResults.length} Results</p>
        {markup}
      </Item.Group>
    ) : (
      <p>no search results</p>
    );
  }
}

SearchResultCollection.defaultProps = {
  searchResults,
};
SearchResultCollection.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultCollection;
