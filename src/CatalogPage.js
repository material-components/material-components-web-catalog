import React from 'react';

import ComponentPage from './ComponentPage';
import ComponentImageList from './ComponentImageList';
import HeaderBar from './HeaderBar';

import {Switch, Route} from 'react-router';

// This is a separate page (Not App.js), since Drawer and TopAppBar
// need to be separate pages due to iFrames.
class CatalogPage extends React.Component {
  state = {
    isDrawerOpen: false
  };

  render() {
    return (
        <div>
          <HeaderBar toggleDrawer={() => this.setState(
              {isDrawerOpen: !this.state.isDrawerOpen})}
                     isTopPage={this.props.location.pathname === '/'}/>
          <Switch>
            <Route exact path='/' render={(props) => <ComponentImageList {...props} />}/>
            <Route path='/component' render={(props) => <ComponentPage {...props} isDrawerOpen={this.state.isDrawerOpen}/>} />
          </Switch>
        </div>
    );
  }
}

export default CatalogPage;
