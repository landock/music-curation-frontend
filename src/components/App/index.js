import React, { Component } from 'react';
import './App.css';
import CurationsContainer from '../../containers/CurationsContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Curation</h1>
        </header>
        <CurationsContainer />
      </div>
    );
  }
}
