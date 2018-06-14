import React from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from '../../containers/SearchResultCard';
import { Item, Header } from 'semantic-ui-react';

function SearchResultCollection({ searchResults }) {
  let markup =
    searchResults &&
    searchResults.map(result => (
      <SearchResultCard key={result.id} {...result} />
    ));
  return markup ? (
    <Item.Group>
      <Header>Search Results</Header>
      <p>{searchResults.length} Results</p>
      {markup}
    </Item.Group>
  ) : (
    <p>no search results</p>
  );
}

// SearchResultCollection.defaultProps = {
//   searchResults,
// };
SearchResultCollection.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultCollection;
