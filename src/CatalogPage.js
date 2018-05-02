import React, {Component} from 'react';

import ComponentPage from './ComponentPage';
import LandingPage from './LandingPage';
import HeaderBar from './HeaderBar';

import {Switch, Route} from 'react-router';


class CatalogPage extends Component {

  render() {
    const {location} = this.props;
    return (
      <div>
        <HeaderBar isTopPage={location.pathname === '/'} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/component' component={ComponentPage} />
        </Switch>
      </div>
    );
  }
}

export default CatalogPage;
