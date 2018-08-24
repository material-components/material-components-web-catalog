import React, {Component} from 'react';
import classnames from 'classnames';

import ComponentSidebar from './ComponentSidebar';
import {Switch, Route} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './styles/ComponentPage.scss';

const components = [{
  urlPath: 'button',
  filePath: './ButtonCatalog',
}, {
  urlPath: 'card',
  filePath: './CardCatalog',
}, {
  urlPath: 'checkbox',
  filePath: './CheckboxCatalog',
}, {
  urlPath: 'chips',
  filePath: './ChipsCatalog',
}, {
  urlPath: 'dialog',
  filePath: './DialogCatalog',
}, {
  urlPath: 'drawer',
  filePath: './DrawerCatalog',
}, {
  urlPath: 'elevation',
  filePath: './ElevationCatalog',
}, {
  urlPath: 'fab',
  filePath: './FabCatalog',
}, {
  urlPath: 'icon-button',
  filePath: './IconButtonCatalog',
}, {
  urlPath: 'image-list',
  filePath: './ImageListCatalog',
}, {
  urlPath: 'layout-grid',
  filePath: './LayoutGridCatalog',
}, {
  urlPath: 'list',
  filePath: './ListCatalog',
}, {
  urlPath: 'linear-progress-indicator',
  filePath: './LinearProgressIndicatorCatalog',
}, {
  urlPath: 'menu',
  filePath: './MenuCatalog',
}, {
  urlPath: 'radio',
  filePath: './RadioButtonCatalog',
}, {
  urlPath: 'ripple',
  filePath: './RippleCatalog',
}, {
  urlPath: 'select',
  filePath: './SelectCatalog',
}, {
  urlPath: 'shape',
  filePath: './ShapeCatalog',
}, {
  urlPath: 'slider',
  filePath: './SliderCatalog',
}, {
  urlPath: 'snackbar',
  filePath: './SnackbarCatalog',
}, {
  urlPath: 'switch',
  filePath: './SwitchCatalog',
}, {
  urlPath: 'tabs',
  filePath: './TabsCatalog',
}, {
  urlPath: 'text-field',
  filePath: './TextFieldCatalog',
}, {
  urlPath: 'theme',
  filePath: './ThemeCatalog',
}, {
  urlPath: 'top-app-bar',
  filePath: './TopAppBarCatalog',
}, {
  urlPath: 'typography',
  filePath: './TypographyCatalog',
}];

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
        <TransitionGroup ref={this.initDemoContent} onTransitionEnd={this.handleTransitionEnd_} classes='demo-content-transition'>
          <CSSTransition key={this.props.location.pathname} timeout={350} transitionExitTimeout={0} classNames='loadComponent'>
            <Switch>
              {components.map((component) => {
                const {filePath, urlPath} = component;
                const Component = require(`${filePath}`).default;
                return (
                  <Route
                    key={urlPath}
                    path={`/component/${urlPath}`}
                    render={(props) => <Component {...props}/>} />
                );
              })}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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
    if (!this.demoContentEl) return;
    this.demoContentEl.style.setProperty('transform', `translateX(${drawerWidth / 2}px)`);
    // Force repaint
    this.demoContentEl.getBoundingClientRect();
    requestAnimationFrame(() => {
      this.setState({[stateName]: true});
      this.demoContentEl.style.setProperty('transform', '');
    });
  }

  render() {
    const classes = classnames('demo-content', {
      'demo-content--animating-open': this.state.opening,
      'demo-content--animating-close': this.state.closing,
    });

    return (
      <div>
        <div className='mdc-top-app-bar--fixed-adjust demo-panel'>
          <ComponentSidebar {...this.props} handleOpen={this.handleOpen_} handleClose={this.handleClose_} />
          <div className={classes} ref={this.initDemoContent} onTransitionEnd={this.handleTransitionEnd_}>
            {this.renderComponentRoutes()}
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
