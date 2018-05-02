import React from 'react';
import PropTypes from 'prop-types';

function PublicationStatusEditor({
  created_at,
  updated_at,
  scheduled_at,
  environment,
  published,
}) {
  return (
    <div style={{ textAlign: 'left', flex: '1' }}>
      <button>Modify curation</button>
      <p>
        <strong>Status:</strong> {published ? 'Published' : 'Draft'}
      </p>
      <p>
        <strong>Updated:</strong> {updated_at}
      </p>
      <p>
        <strong>Scheduled:</strong> {created_at}
      </p>
      <p>
        <strong>Expires:</strong> {scheduled_at}
      </p>
      <div>
        <p>Exists in: </p>
        <p>
          {environment.map((env, index) => <span key={index}> {env} </span>)}
        </p>
      </div>
    </div>
  );
}

PublicationStatusEditor.propTypes = {
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  scheduled_at: PropTypes.string,
  environment: PropTypes.arrayOf(
    PropTypes.oneOf(['staging', 'production', 'development'])
  ),
  published: PropTypes.bool,
};

export default PublicationStatusEditor;
