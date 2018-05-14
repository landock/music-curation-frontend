import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import logo from '../../img/logo.svg';
import CurationsContainer from '../../containers/CurationsContainer';
import CurationSearchBar from '../CurationSearchBar';
import CurationFilterSubHeader from '../CurationFilterSubHeader';
import SearchResultFilterSubHeader from '../SearchResultFilterSubHeader';
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
                  <Image src={logo} size="small" centered />
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

        <Grid.Row>
          <Grid.Column textAlign="left">
            <Route exact path="/" component={BulkCurationEditor} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign="left">
            <Route exact path="/" component={CurationsContainer} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
