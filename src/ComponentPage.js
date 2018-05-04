import React, {Component} from 'react';
import classnames from 'classnames';

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

import './styles/ComponentPage.scss';

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
class ComponentPage extends Component {
  state = {opening: false, closing: false};
  initDemoContent = (el) => {
    this.demoContentEl = el;
  };
  handleOpen_ = (drawerWidth) => this.handleOpen(drawerWidth);
  handleClose_ = (drawerWidth) => this.handleClose(drawerWidth);
  handleTransitionEnd_ = (evt) => this.handleTransitionEnd(evt);

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
        <Route path='/component/top-app-bar' component={TopAppBarCatalog} />
        <Route path='/component/typography' component={TypographyCatalog} />
      </Switch>
    );
  }

  handleOpen(drawerWidth) {
    // Negative drawerWidth because we're sliding from to right
    this.animate(-drawerWidth, 'opening');
  }

  handleClose(drawerWidth) {
    // Positive drawerWidth because we're sliding from to left
    this.animate(drawerWidth, 'closing');
  }

  handleTransitionEnd(evt) {
    if (evt.target !== this.demoContentEl) return;
    if (!this.state.opening && !this.state.closing) return;
    this.setState({opening: false, closing: false});
  }

  animate(drawerWidth, stateName) {
    this.demoContentEl.style.setProperty('transform', `translateX(${drawerWidth / 2}px)`);
    // Force repaint
    this.demoContentEl.getBoundingClientRect();
    requestAnimationFrame(() => {
      this.setState({[stateName]: true});
      this.demoContentEl.style.setProperty('transform', '');
    });
  }

  render() {
    const classes = classnames('mdc-layout-grid', 'demo-content', {
      'demo-content--animating-open': this.state.opening,
      'demo-content--animating-close': this.state.closing,
    });

    return (
      <div>
        <div className='mdc-top-app-bar--fixed-adjust demo-panel'>
          <ComponentSidebar {...this.props} handleOpen={this.handleOpen_} handleClose={this.handleClose_} />
          <div className={classes} ref={this.initDemoContent} onTransitionEnd={this.handleTransitionEnd_}>
            <div className='mdc-layout-grid__inner'>
              {this.renderComponentRoutes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
