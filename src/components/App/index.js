import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    const { curations } = this.props;
    let id, imageUrl, tracks, curationName;
    if (curations && curations[0]) {
      id = curations[0].id;
      imageUrl = curations[0].imageUrl;
      tracks = curations[0].tracks;
      curationName = curations[0].name;
    }
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Music Curation Apppppp</h1>
        </header>
        <h1>
          {`${curationName} - ${id}`}
          <img style={{ height: '120px' }} src={imageUrl} />
        </h1>
        {tracks &&
          tracks.map(track => {
            return (
              <div key={track.id}>
                <img style={{ height: '120px' }} src={track.imageUrl} />
                <p>{`${track.artistName} - ${track.trackName}`}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
