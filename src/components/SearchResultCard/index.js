import React from 'react';
import PropTypes from 'prop-types';

function SearchResultCard({
  trackName,
  artistName,
  durationInSeconds,
  imageUrl,
  streamUrl,
  recordLabels,
}) {
  return (
    <div style={{ display: 'flex' }}>
      <img style={{ height: '150px' }} src={imageUrl} />
      <div>
        <h4>
          {trackName}
          <button>add to curation</button>
        </h4>
        <p>{artistName}</p>
        <p>
          {recordLabels ? (
            recordLabels.map((label, index) => <span key={index}>{label}</span>)
          ) : (
            <span> no labels </span>
          )}
        </p>
        <p>{durationInSeconds}</p>
        <div>
          <button>tags</button>
          <button>Add to</button>
        </div>
      </div>
    </div>
  );
}

SearchResultCard.propTypes = {
  trackName: PropTypes.string,
  artistName: PropTypes.string,
  durationInSeconds: PropTypes.number,
  imageUrl: PropTypes.string,
  streamUrl: PropTypes.string,
  recordLabels: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResultCard;
