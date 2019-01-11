import React, {Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import '../styles/HeroComponent.scss';
import {HeroOptionsComponent} from './HeroOptionsComponent';
import queryString from 'query-string';
import ReactGA from 'react-ga';
import {gtagTabCategory} from '../constants';
import WebTab from './WebTab';
import ReactTab from './ReactTab';

export const getUrlParamsFromSearch = function(search) {
  return queryString.parse(search);
};

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    // Deep copy for local object
    this.localConfig = JSON.parse(JSON.stringify(this.props.initialConfig));
    const urlParams = getUrlParamsFromSearch(this.props.location.search);
    this.localConfig = this.copyUrlParamsToLocalConfig(this.localConfig, urlParams);
  }

  copyUrlParamsToLocalConfig(localConfig, urlParams) {

    // For each url param, copy it over to the local config in the appropriate place.
    Object.keys(urlParams).forEach((key) => {
      if (localConfig.options) {
        localConfig.options.forEach((opt) => {
          if (key === opt.urlParam) {
            // To be cleaned up with a standardized model when all option types are defined.
            if (opt.type === 'radiogroup' || opt.type === 'textfield') {
              opt.value = urlParams[key];
            }
          }
        });
      }
    });

    return localConfig;
  }

  render() {
    const urlParams = getUrlParamsFromSearch(this.props.location.search);
    this.localConfig = this.copyUrlParamsToLocalConfig(this.localConfig, urlParams);

    return (
      <React.Fragment>
        <div className='heroComponent'>
          <HeroTabs config={this.localConfig} {...this.props}>
            {React.cloneElement(this.props.children, {...this.props.children.props, ...{config: this.localConfig}})}
          </HeroTabs>
        </div>
      </React.Fragment>
    )
  }
}

class HeroTabs extends Component {
  state = {activeIndex: 0, codeString: ''};
  tabNames = ['Demo', 'Web', 'React'];

  handleActiveIndexUpdate = (activeIndex) => {
    this.setState({activeIndex});
  };

  render() {
    const {children, location} = this.props;

    const tabContents = [
      children,
      <WebTab location={location}>{children}</WebTab>,
      <ReactTab location={location}>{children}</ReactTab>,
    ];

    return (
      <React.Fragment>
        <TabBar
            activeIndex={this.state.activeIndex}
            handleActiveIndexUpdate={this.handleActiveIndexUpdate}
            className='catalog-hero-tab-bar'>
          {this.tabNames.map((tabName, index) => {
            return (
              <Tab className='hero-tab' key={index}>
                <span>{tabName}</span>
              </Tab>
            )})}
        </TabBar>
        <div className={'tab-container'}>
          {tabContents.map((content, index) => {
            if (this.state.activeIndex !== index) return null;

            ReactGA.event({category: gtagTabCategory, action: 'tab_clicked', label: 'tab_clicked_' + this.tabNames[this.state.activeIndex] });

            return (
              <div className='tab-content' key={index}>
                {content}
              </div>
            );
          })}

        </div>
          <HeroOptionsComponent {...this.props} />
      </React.Fragment>
    )
  }
}

export default HeroComponent;
