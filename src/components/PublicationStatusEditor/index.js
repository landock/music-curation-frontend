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
    <div>
      <p>Status: {published ? 'Scheduled' : 'Draft'}</p>
      <p>Updated: {updated_at}</p>
      <p>Scheduled: {created_at}</p>
      <p>Expires: {scheduled_at}</p>
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
