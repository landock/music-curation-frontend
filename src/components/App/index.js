import React, { Component } from 'react';
import './App.css';
import logo from '../../img/logo.svg';
import CurationsContainer from '../../containers/CurationsContainer';
import CurationSearchBar from '../CurationSearchBar';
import CurationFilterSubHeader from '../CurationFilterSubHeader';
import BulkCurationEditor from '../BulkCurationEditor';
import { Icon } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              width: '100%',
              height: '75px',
              background: '#fff',
              textAlign: 'center',
            }}
          >
            <img height={50} src={logo} />
          </div>
          <CurationSearchBar />
          <CurationFilterSubHeader />
        </header>
        <BulkCurationEditor />
        <CurationsContainer />
      </div>
    );
  }
}
