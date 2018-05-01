import React, { Component } from 'react';
import Curation from '../Curation';

class CurationsCollection extends Component {
  render() {
    const { curations } = this.props;
    const hasCurations =
      curations && curations.curations && curations.curations[0];
    const curationsMarkup = hasCurations ? (
      curations.curations.map(curation => (
        <Curation key={curation.id} curation={curation} />
      ))
    ) : (
      <p>No Curations Found</p>
    );

    return curationsMarkup;
  }
}

export default CurationsCollection;
