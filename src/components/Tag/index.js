import React from 'react';
import { Label } from 'semantic-ui-react';

function Tag({ data }) {
  return (
    <Label style={{ marginBottom: '1%' }} color="red">
      {data.title}
    </Label>
  );
}

export default Tag;
