import React from 'react';

export default function TracksView({ tracks }) {
  if (!tracks) return <p>No tracks available.</p>;
  return <p>{tracks.join(', ')}</p>;
}
