import React, { Component } from 'react';
import './App.css';
import logo from '../../img/logo.svg';
import CurationsContainer from '../../containers/CurationsContainer';
import CurationSearchBar from '../CurationSearchBar';
import CurationFilterSubHeader from '../CurationFilterSubHeader';
import SearchResultFilterSubHeader from '../SearchResultFilterSubHeader';
import BulkCurationEditor from '../BulkCurationEditor';
import { Icon, Image, Search } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon name="sidebar" color="black" size="large" />
          <Image src={logo} size="small" centered />
          <CurationSearchBar />
          <SearchResultFilterSubHeader />
        </header>
        <BulkCurationEditor />
        <CurationsContainer />
      </div>
    );
  }
}
