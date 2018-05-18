import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

class CurationSearchBar extends PureComponent {
  render() {
    return (
      <Form inverted>
        <Form.Input icon="search" placeholder="Search Curations" />
      </Form>
    );
  }
}

export default CurationSearchBar;
