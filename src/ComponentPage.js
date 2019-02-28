import React, {Component} from 'react';

import ComponentSidebar from './ComponentSidebar';
import {Switch} from 'react-router';
import Routes from './Routes';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './styles/ComponentPage.scss';

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
class ComponentPage extends Component {
  demoContentEl = null;
  state = {opening: false, closing: false};

  initDemoContent = (el) => {
    this.demoContentEl = el;
  };

  componentDidUpdate() {
    this.props.scrollTargetSetter(this.demoContentEl);
  }

  renderComponentRoutes() {
    return (
      <TransitionGroup
        className='demo-content-transition'
      >
        <CSSTransition
          key={this.props.location.pathname}
          timeout={350}
          transitionExitTimeout={0}
          classNames='loadComponent'
        >
          <Switch>
            <Routes />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  render() {
    return (
      <div className='demo-panel'>
        <ComponentSidebar {...this.props} />
        <div
          className='demo-content mdc-drawer-app-content mdc-top-app-bar--fixed-adjust'
          ref={this.initDemoContent}
        >
          {this.renderComponentRoutes()}
        </div>
      </div>
    );
  }
}

export default ComponentPage;
