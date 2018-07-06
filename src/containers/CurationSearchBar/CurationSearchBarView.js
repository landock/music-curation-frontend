import React from 'react';
import { Form } from 'semantic-ui-react';

export default function CurationSearchBarView({ searchTerm }) {
  return (
    <Form id="search-form">
      <Form.Input
        id="search-term"
        value={searchTerm}
        icon="search"
        placeholder="Search Curations"
      />
    </Form>
  );
}
