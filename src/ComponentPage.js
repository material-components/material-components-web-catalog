import React, {Component} from 'react';

import ComponentSidebar from './ComponentSidebar';
import {Switch} from 'react-router';
import Routes from './Routes';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './styles/ComponentPage.scss';

const addToGroup = (data, group, entry) => {
  if (data[group] && data[group].length > 0) {
    data[group].push(entry);
    return;
  }
  data[group] = [entry];
};

const setupSassDocData = () => {
  const formattedData = [];
  SASSDOC_JSON.forEach((entry) => {
    const group = entry.group[0];
    addToGroup(formattedData, group, entry);
  });
  return formattedData;
};

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
class ComponentPage extends Component {
  state = {
    opening: false,
    closing: false,
    sassDocData: {},
  };
  initDemoContent = (el) => {
    this.demoContentEl = el;
  };

  componentDidUpdate() {
    this.props.scrollTargetSetter(this.demoContentEl);
  }

  componentDidMount() {
    this.setState({sassDocData: setupSassDocData()});
  }

  renderComponentRoutes() {
    return (
      <TransitionGroup ref={this.initDemoContent} onTransitionEnd={this.handleTransitionEnd_} classes='demo-content-transition'>
        <CSSTransition key={this.props.location.pathname} timeout={350} transitionExitTimeout={0} classNames='loadComponent'>
          <Switch>
            <Routes sassDocData={this.state.sassDocData} />
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
