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
import IconButtonCatalog from './IconButtonCatalog';
import ImageListCatalog from './ImageListCatalog';
import MenuCatalog from './MenuCatalog';
import LayoutGridCatalog from './LayoutGridCatalog';
import LinearProgressIndicatorCatalog from './LinearProgressIndicatorCatalog';
import ListCatalog from './ListCatalog';
import RadioButtonCatalog from './RadioButtonCatalog';
import RippleCatalog from './RippleCatalog';
import ShapeCatalog from './ShapeCatalog';
import SelectCatalog from './SelectCatalog';
import SliderCatalog from './SliderCatalog';
import SnackbarCatalog from './SnackbarCatalog';
import SwitchCatalog from './SwitchCatalog';
import TabsCatalog from './TabsCatalog';
import TextFieldCatalog from './TextFieldCatalog';
import TopAppBarCatalog from './TopAppBarCatalog';
import TypographyCatalog from './TypographyCatalog';

import {Switch, Route} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './styles/ComponentPage.scss';
import ThemeCatalog from './ThemeCatalog';

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
class ComponentPage extends Component {
  state = {opening: false, closing: false};
  initDemoContent = (el) => {
    this.demoContentEl = el;
  };

  componentDidUpdate() {
    this.props.scrollTargetSetter(this.demoContentEl);
  }

  renderComponentRoutes() {
    return (
        <TransitionGroup ref={this.initDemoContent} className='demo-content-transition'>
          <CSSTransition key={this.props.location.pathname} timeout={350} transitionExitTimeout={0} classNames='loadComponent'>
            <Switch>
              <Route path='/component/button' component={ButtonCatalog} />
              <Route path='/component/card' component={CardCatalog} />
              <Route path='/component/checkbox' component={CheckboxCatalog} />
              <Route path='/component/chips' component={ChipsCatalog} />
              <Route path='/component/dialog' component={DialogCatalog} />
              <Route path='/component/drawer' component={DrawerCatalog} />
              <Route path='/component/elevation' component={ElevationCatalog} />
              <Route path='/component/fab' component={FabCatalog} />
              <Route path='/component/icon-button' component={IconButtonCatalog} />
              <Route path='/component/image-list' component={ImageListCatalog} />
              <Route path='/component/layout-grid' component={LayoutGridCatalog} />
              <Route path='/component/list' component={ListCatalog} />
              <Route path='/component/linear-progress-indicator' component={LinearProgressIndicatorCatalog} />
              <Route path='/component/menu' component={MenuCatalog} />
              <Route path='/component/radio' component={RadioButtonCatalog} />
              <Route path='/component/ripple' component={RippleCatalog} />
              <Route path='/component/select' component={SelectCatalog} />
              <Route path='/component/shape' component={ShapeCatalog} />
              <Route path='/component/slider' component={SliderCatalog} />
              <Route path='/component/snackbar' component={SnackbarCatalog} />
              <Route path='/component/switch' component={SwitchCatalog} />
              <Route path='/component/tabs' component={TabsCatalog} />
              <Route path='/component/text-field' component={TextFieldCatalog} />
              <Route path='/component/theme' component={ThemeCatalog} />
              <Route path='/component/top-app-bar' component={TopAppBarCatalog} />
              <Route path='/component/typography' component={TypographyCatalog} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    );
  }

  render() {
    return (
      <div className='demo-panel'>
        <ComponentSidebar {...this.props} />
        <div className='demo-content mdc-top-app-bar--fixed-adjust' ref={this.initDemoContent}>
          {this.renderComponentRoutes()}
        </div>
      </div>
    );
  }
}

export default ComponentPage;
