import React, { Component } from 'react';
class Curation extends Component {
  render() {
    const { curation } = this.props;
    return (
      <div style={{ flex: '2', textAlign: 'left' }} key={curation.id}>
        <img
          style={{ height: '120px', display: 'inline-block' }}
          src={curation.imageUrl}
        />
        <div style={{ display: 'inline-block' }}>
          <span className="curation-name">{curation.name} </span>

          <p>
            Tracks:
            {curation.tracks &&
              curation.tracks.map(track => {
                return (
                  <span
                    style={{
                      background: '#ccc',
                      margin: '2px',
                      padding: '3px',
                    }}
                    key={track.id}
                  >
                    {' '}
                    {track.trackName}{' '}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
    );
  }
}

export default Curation;
