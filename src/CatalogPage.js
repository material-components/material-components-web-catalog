import React from 'react';

import ComponentPage from './ComponentPage';
import ComponentImageList from './ComponentImageList';
import HeaderBar from './HeaderBar';

import {Switch, Route} from 'react-router';

// This is a separate page (Not App.js), since Drawer and TopAppBar
// need to be separate pages due to iFrames.
const CatalogPage = (props) => {
  const {location} = props;
  return (
    <div>
      <HeaderBar isTopPage={location.pathname === '/'} />
      <Switch>
        <Route exact path='/' component={ComponentImageList} />
        <Route path='/component' component={ComponentPage} />
      </Switch>
    </div>
  );
}

export default CatalogPage;
