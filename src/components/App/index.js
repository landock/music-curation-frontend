import React, { Component } from 'react';
import './App.css';
import logo from '../../img/logo.svg';
import CurationsContainer from '../../containers/CurationsContainer';
import TagCollection from '../TagCollection';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ width: '100%', height: '50px', background: '#fff' }}>
            <img width="100" src={logo} />
          </div>
          <div
            style={{
              backgroundColor: '#354244',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <input
              style={{
                width: '50%',
                padding: '5px',
                height: '25px',
                fontSize: '50%',
              }}
              type="text"
              placeholder="Search Curations"
            />
          </div>
          <div style={{ background: 'black', height: '150px', width: '100%' }}>
            <div>
              <label>Environment</label>
              <select />
            </div>
            <div>
              <label>Status</label>
              <select />
            </div>
            <div>
              <span>Tags </span>
              <TagCollection
                tags={[{ id: 1, title: 'what' }, { id: 2, title: 'when' }]}
              />
            </div>
          </div>
        </header>
        <CurationsContainer />
      </div>
    );
  }
}
