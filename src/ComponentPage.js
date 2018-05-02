import React, {Component} from 'react';

import Sidebar from './Sidebar';
import ButtonCatalog from './ButtonCatalog';
import CardCatalog from './CardCatalog';
import CheckboxCatalog from './CheckboxCatalog';
import DialogCatalog from './DialogCatalog';
import DrawerCatalog from './DrawerCatalog';
import ElevationCatalog from './ElevationCatalog';
import FabCatalog from './FabCatalog';
import IconToggleCatalog from './IconToggleCatalog';
import ImageListCatalog from './ImageListCatalog';
import LinearProgressIndicatorCatalog from './LinearProgressIndicatorCatalog';
import ListCatalog from './ListCatalog';
import SelectCatalog from './SelectCatalog';
import TextFieldCatalog from './TextFieldCatalog';
import TopAppBarCatalog from './TopAppBarCatalog';

import {Switch, Route} from 'react-router';

import './styles/ComponentPage.scss';

class ComponentPage extends Component {
  renderComponentRoutes() {
    const {match} = this.props;

    return (
      <Switch>
        <Route path={`${match.path}/button`} component={ButtonCatalog} />
        <Route path={`${match.path}/card`} component={CardCatalog} />
        <Route path={`${match.path}/checkbox`} component={CheckboxCatalog} />
        <Route path={`${match.path}/dialog`} component={DialogCatalog} />
        <Route path={`${match.path}/drawer`} component={DrawerCatalog} />
        <Route path={`${match.path}/elevation`} component={ElevationCatalog} />
        <Route path={`${match.path}/fab`} component={FabCatalog} />
        <Route path={`${match.path}/icon-toggle`} component={IconToggleCatalog} />
        <Route path={`${match.path}/image-list`} component={ImageListCatalog} />
        <Route path={`${match.path}/list`} component={ListCatalog} />
        <Route path={`${match.path}/linear-progress-indicator`} component={LinearProgressIndicatorCatalog} />
        <Route path={`${match.path}/select`} component={SelectCatalog} />
        <Route path={`${match.path}/text-field`} component={TextFieldCatalog} />
        <Route path={`${match.path}/top-app-bar`} component={TopAppBarCatalog} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <div className='mdc-top-app-bar--fixed-adjust'>
          <div className='mdc-layout-grid'>
            <div className='mdc-layout-grid__inner'>
              <Sidebar {...this.props} />
              {this.renderComponentRoutes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
