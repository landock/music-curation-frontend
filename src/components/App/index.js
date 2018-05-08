import React, { Component } from 'react';
import './App.css';
import logo from '../../img/logo.svg';
import CurationsContainer from '../../containers/CurationsContainer';
import CurationSearchBar from '../CurationSearchBar';
import CurationFilterSubHeader from '../CurationFilterSubHeader';
import SearchResultFilterSubHeader from '../SearchResultFilterSubHeader';
import BulkCurationEditor from '../BulkCurationEditor';
import {
  Container,
  Grid,
  Icon,
  Image,
  Search,
  Segment,
} from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <Grid container className="App">
        <Grid.Row className="App-header">
          <Grid.Column>
            <Grid container columns="2">
              <Grid.Row>
                <Grid.Column floated="left" width={2}>
                  <Icon name="sidebar" color="black" size="large" />
                </Grid.Column>
                <Grid.Column width={14}>
                  <Image src={logo} size="small" centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column color="grey">
            <CurationSearchBar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SearchResultFilterSubHeader />
          </Grid.Column>
        </Grid.Row>
        <BulkCurationEditor />
        <CurationsContainer />
      </Grid>
    );
  }
}
