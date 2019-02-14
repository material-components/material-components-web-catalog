import React, {Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import '../styles/HeroComponent.scss';
import ReactGA from 'react-ga';
import {gtagTabCategory} from '../constants';
import WebTab from './WebTab';
import ReactTab from './ReactTab';

class HeroComponent extends Component {
  render() {
    return (
      <div className='hero-component'>
        <HeroTabs {...this.props}>
          {React.cloneElement(this.props.children, {...this.props.children.props, ...{config: this.props.config}})}
        </HeroTabs>
      </div>
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
    const {children, location, config} = this.props;

    const tabContents = [
      children,
      <WebTab location={location} config={config}>{children}</WebTab>,
      <ReactTab location={location} config={config}>{children}</ReactTab>,
    ];

    return (
      <React.Fragment>
        <TabBar
          activeIndex={this.state.activeIndex}
          handleActiveIndexUpdate={this.handleActiveIndexUpdate}
          className='catalog-hero-tab-bar'
        >
          {this.tabNames.map((tabName, index) => {
            return (
              <Tab className='hero-tab' key={index}>
                <span>{tabName}</span>
              </Tab>
            )})}
        </TabBar>
        <div className='tab-container'>
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
      </React.Fragment>
    )
  }
}

export default HeroComponent;
