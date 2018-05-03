import React, {Component} from 'react';

import {Switch, Route} from 'react-router';
import {withRouter} from 'react-router-dom';
import CatalogPage from './CatalogPage';
import TopAppBarFramePage from './frame/TopAppBarFramePage';
import DrawerFramePage from './frame/DrawerFramePage';

import './styles/App.scss';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/component/drawer/:type' component={DrawerFramePage} />
        <Route path='/component/top-app-bar/:type' component={TopAppBarFramePage} />
        <Route path='/' component={CatalogPage} />
      </Switch>
    );
  }
}

export default withRouter(App);
