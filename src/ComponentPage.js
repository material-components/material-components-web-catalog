import React, {Component} from 'react';

import ComponentSidebar from './ComponentSidebar';
import ButtonCatalog from './ButtonCatalog';
import CardCatalog from './CardCatalog';
import CheckboxCatalog from './CheckboxCatalog';
import ChipsCatalog from './ChipsCatalog';
import DialogCatalog from './DialogCatalog';
import DrawerCatalog from './DrawerCatalog';
import ElevationCatalog from './ElevationCatalog';
import FabCatalog from './FabCatalog';
import IconToggleCatalog from './IconToggleCatalog';
import ImageListCatalog from './ImageListCatalog';
import MenuCatalog from './MenuCatalog';
import LinearProgressIndicatorCatalog from './LinearProgressIndicatorCatalog';
import ListCatalog from './ListCatalog';
import RadioButtonCatalog from './RadioButtonCatalog';
import RippleCatalog from './RippleCatalog';
import SelectCatalog from './SelectCatalog';
import SliderCatalog from './SliderCatalog';
import SnackbarCatalog from './SnackbarCatalog';
import SwitchCatalog from './SwitchCatalog';
import TextFieldCatalog from './TextFieldCatalog';
import TopAppBarCatalog from './TopAppBarCatalog';
import TypographyCatalog from './TypographyCatalog';

import {Switch, Route} from 'react-router';

import './styles/ComponentPage.scss';

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
class ComponentPage extends Component {
  renderComponentRoutes() {
    return (
      <Switch>
        <Route path='/component/button' component={ButtonCatalog} />
        <Route path='/component/card' component={CardCatalog} />
        <Route path='/component/checkbox' component={CheckboxCatalog} />
        <Route path='/component/chips' component={ChipsCatalog} />
        <Route path='/component/dialog' component={DialogCatalog} />
        <Route path='/component/drawer' component={DrawerCatalog} />
        <Route path='/component/elevation' component={ElevationCatalog} />
        <Route path='/component/fab' component={FabCatalog} />
        <Route path='/component/icon-toggle' component={IconToggleCatalog} />
        <Route path='/component/image-list' component={ImageListCatalog} />
        <Route path='/component/list' component={ListCatalog} />
        <Route path='/component/linear-progress-indicator' component={LinearProgressIndicatorCatalog} />
        <Route path='/component/menu' component={MenuCatalog} />
        <Route path='/component/radio' component={RadioButtonCatalog} />
        <Route path='/component/ripple' component={RippleCatalog} />
        <Route path='/component/select' component={SelectCatalog} />
        <Route path='/component/slider' component={SliderCatalog} />
        <Route path='/component/snackbar' component={SnackbarCatalog} />
        <Route path='/component/switch' component={SwitchCatalog} />
        <Route path='/component/text-field' component={TextFieldCatalog} />
        <Route path='/component/top-app-bar' component={TopAppBarCatalog} />
        <Route path='/component/typography' component={TypographyCatalog} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <div className='mdc-top-app-bar--fixed-adjust'>
          <div className='mdc-layout-grid'>
            <div className='mdc-layout-grid__inner'>
              <ComponentSidebar {...this.props} />
              {this.renderComponentRoutes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
