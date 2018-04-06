import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    const { curations } = this.props;
    const hasCurations = curations && curations[0];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Curation</h1>
        </header>

        {hasCurations ? (
          curations.map(curation => (
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
        )}
      </div>
    );
  }
}
