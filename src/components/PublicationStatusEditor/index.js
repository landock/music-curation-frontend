import React from 'react';
import PropTypes from 'prop-types';
import ModifyCuration from '../ModifyCuration';
import { Popup, Icon, Button, Grid } from 'semantic-ui-react';

function PublicationStatusEditor({
  id,
  created_at,
  updated_at,
  scheduled_at,
  environment,
  published,
}) {
  return (
    <Grid>
      <Grid.Column floated="left" width={14}>
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
      </Grid.Column>
      <Grid.Column floated="right" width={2}>
        <Popup
          trigger={
            <Icon style={{ cursor: 'pointer' }} name="ellipsis vertical" />
          }
          content={<ModifyCuration id={id} />}
          on="click"
          position="bottom right"
          verticalOffset={10}
        />
      </Grid.Column>
    </Grid>
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
