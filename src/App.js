import React, {Component} from 'react';
import CatalogPage from './CatalogPage';

import {Switch, Route} from 'react-router';
import {HashRouter} from 'react-router-dom';
import TopAppBarFramePage from './frame/TopAppBarFramePage';
import DrawerFramePage from './frame/DrawerFramePage';

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/component/drawer/:type' component={DrawerFramePage} />
          <Route path='/component/top-app-bar/:type' component={TopAppBarFramePage} />
          <Route path='/' component={CatalogPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
