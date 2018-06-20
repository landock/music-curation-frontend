import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from '../../containers/SearchResultCard';
import { Item, Header } from 'semantic-ui-react';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

const SortableList = SortableContainer(({ searchResults }) => {
  return (
    <Item.Group>
      {searchResults.map((result, index) => (
        <SearchResultCard key={result.id} index={index} {...result} />
      ))}
    </Item.Group>
  );
});

export default class SearchResultCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.searchResults,
    };
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { searchResults } = this.state;

    this.setState({
      searchResults: arrayMove(searchResults, oldIndex, newIndex),
    });
  };

  render() {
    const { searchResults } = this.state;

    return searchResults ? (
      <div>
        <Header>Search Results</Header>
        <p>{searchResults.length} Results</p>
        <SortableList
          searchResults={searchResults}
          onSortEnd={this.onSortEnd}
          useDragHandle={true}
        />
      </div>
    ) : (
      <p>no search results</p>
    );
  }
}
