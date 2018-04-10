import React, { Component } from 'react';

class CurationsCollection extends Component {
  render() {
    const { curations } = this.props;
    const hasCurations =
      curations && curations.curations && curations.curations[0];
    const curationsMarkup = hasCurations ? (
      curations.curations.map(curation => (
        <div key={curation.id}>
          <h1>
            {`${curation.name} - ${curation.id}`}
            <img style={{ height: '120px' }} src={curation.imageUrl} />
          </h1>
          {curation.tracks &&
            curation.tracks.map(track => {
              return (
                <div key={track.id}>
                  <img style={{ height: '120px' }} src={track.imageUrl} />
                  <p>{`${track.artistName} - ${track.trackName}`}</p>
                </div>
              );
            })}
        </div>
      ))
    ) : (
      <p>No Curations Found</p>
    );

    debugger;
    return curationsMarkup;
  }
}

export default CurationsCollection;
