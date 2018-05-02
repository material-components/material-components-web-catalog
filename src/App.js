import React, {Component} from 'react';
import LandingPage from './LandingPage';
import ComponentSection from './ComponentSection';

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
          <Route exact path='/' component={LandingPage} />
          <Route path='/component/top-app-bar/:type' component={TopAppBarFramePage} />
          <Route path='/component' component={ComponentSection} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
