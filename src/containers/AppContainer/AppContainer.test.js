import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { AppContainer } from './index';
import mockStore from '../../fixtures/mockStore';

describe('AppContainer', () => {
  let component;

  it('renders without crashing', () => {});
});
