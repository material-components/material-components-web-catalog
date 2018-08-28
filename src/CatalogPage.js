import React from 'react';

import ComponentPage from './ComponentPage';
import ComponentImageList from './ComponentImageList';
import HeaderBar from './HeaderBar';

import {Switch, Route} from 'react-router';
import './styles/CatalogPage.scss';

// This is a separate page (Not App.js), since Drawer and TopAppBar
// need to be separate pages due to iFrames.
class CatalogPage extends React.Component {
  state = {
    isDrawerOpen: false,
    scrollTargetSetter: () => {},
  };

  render() {
    return (
        <div className='catalog-page-container'>
          <HeaderBar scrollTarget={(scrollTargetSetter) => this.setState({scrollTargetSetter}) }
              toggleDrawer={() => this.setState({isDrawerOpen: !this.state.isDrawerOpen})}
              isTopPage={this.props.location.pathname === '/'}
          />
          <Switch>
            <Route exact path='/' render={(props) => <ComponentImageList {...props} />}/>
            <Route path='/component' render={(props) => <ComponentPage {...props} scrollTargetSetter={this.state.scrollTargetSetter} isDrawerOpen={this.state.isDrawerOpen}/>} />
          </Switch>
        </div>
    );
  }
}

export default CatalogPage;
