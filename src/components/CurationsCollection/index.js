import React, { Component } from 'react';
import Curation from '../Curation';
import PublicationStatusEditor from '../PublicationStatusEditor';

class CurationsCollection extends Component {
  render() {
    const { curations } = this.props;
    const hasCurations =
      curations && curations.curations && curations.curations[0];
    const curationsMarkup = hasCurations ? (
      curations.curations.map(curation => (
        <div key={curation.id} style={{ display: 'flex' }}>
          <Curation curation={curation} />
          <PublicationStatusEditor
            {...{
              created_at: '2018-04-30T22:09:50.997Z',
              updated_at: '2018-04-30T22:09:50.997Z1',
              scheduled_at: '2018-04-30T22:09:50.997Z',
              environment: ['development'],
            }}
          />
        </div>
      ))
    ) : (
      <p>No Curations Found</p>
    );

    return curationsMarkup;
  }
}

export default CurationsCollection;
