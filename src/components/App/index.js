import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import logo from '../../img/logo.svg';
import Curations from '../../containers/Curations';
import CurationSearchBar from '../CurationSearchBar';
import CurationFilterSubHeader from '../CurationFilterSubHeader';
import SearchResultFilterSubHeader from '../SearchResultFilterSubHeader';
import SearchResults from '../../containers/SearchResults';
import BulkCurationEditor from '../BulkCurationEditor';
import EditCuration from '../EditCuration';
import { Grid, Icon, Image } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <Grid container className="App">
        <Grid.Row className="App-header">
          <Grid.Column>
            <Grid container columns="2">
              <Grid.Row>
                <Grid.Column floated="left" verticalAlign="middle" width={2}>
                  <Icon name="sidebar" color="black" size="large" />
                </Grid.Column>
                <Grid.Column verticalAlign="middle" width={14}>
                  <Image href="/" src={logo} size="small" centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Route
          path="/editCuration/:id"
          render={props => (
            <Grid.Row textAlign="left">
              <Grid.Column>
                <EditCuration {...props} />
              </Grid.Column>{' '}
            </Grid.Row>
          )}
        />
        <Grid.Row>
          <Grid.Column color="grey">
            <CurationSearchBar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Route exact path="/" component={CurationFilterSubHeader} />
            <Route
              path="/editCuration"
              component={SearchResultFilterSubHeader}
            />
          </Grid.Column>
        </Grid.Row>

        <Route
          exact
          path="/"
          render={props => (
            <Grid.Row textAlign="left">
              <Grid.Column>
                <BulkCurationEditor />
              </Grid.Column>
            </Grid.Row>
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Grid.Row textAlign="left">
              <Grid.Column>
                <Curations />
              </Grid.Column>
            </Grid.Row>
          )}
        />
        <Route
          path="/editCuration"
          render={props => (
            <Grid.Row>
              <Grid.Column textAlign="left" width={8}>
                <SearchResults />
              </Grid.Column>
              <Grid.Column width={8}>
                <p>The other side</p>
              </Grid.Column>
            </Grid.Row>
          )}
        />
      </Grid>
    );
  }
}
