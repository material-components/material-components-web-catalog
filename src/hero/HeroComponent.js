import React, {Component} from 'react';
import {MDCTabBar} from '@material/tab-bar/index';
import {MDCTab} from '@material/tab/index';
import classnames from 'classnames';
import '../styles/HeroComponent.scss';
import ReactGA from 'react-ga';
import {gtagTabCategory} from '../constants';
import WebTab from './WebTab';
import ReactTab from './ReactTab';
const tabNames = ['Demo', 'Web', 'React'];

class HeroComponent extends Component {
  render() {
    return (
      <div className='hero-component'>
        <HeroTabs {...this.props}>
          {React.cloneElement(this.props.children, {...this.props.children.props, ...{config: this.props.config}})}
        </HeroTabs>
      </div>
    );
  }
}

class HeroTabs extends Component {
  render() {
    const {children, ...otherProps} = this.props;
    return (
      <TabBar tabs={tabNames} {...otherProps}>
        {children}
      </TabBar>
    );
  }
}

class TabBar extends Component {
  state = {activeIndex: 0};

  initTabBar = (tabBarEl) => {
    if (!tabBarEl) return;
    const tabBar = new MDCTabBar(tabBarEl);
    tabBar.listen('MDCTabBar:activated', (evt) => {
      const activeIndex = evt.detail.index;
      this.setState({activeIndex});
    });
  }

  handleActiveIndexUpdate = (activeIndex) => {
    this.setState({activeIndex});
  };

  render() {
    const {tabs, children, location, config} = this.props;

    const tabContents = [
      children,
      <WebTab location={location} config={config}>{children}</WebTab>,
      <ReactTab location={location} config={config}>{children}</ReactTab>,
    ];

    return (
      <React.Fragment>
        <div
          ref={this.initTabBar}
          className='mdc-tab-bar catalog-hero-tab-bar'
          role='tablist'
        >
          <div className='mdc-tab-scroller'>
            <div className='mdc-tab-scroller__scroll-area'>
              <div className='mdc-tab-scroller__scroll-content'>
               {tabs.map((tabName, index) => (
                  <Tab
                    key={index}
                    isActive={this.state.activeIndex === index}
                  >
                    {tabName}
                  </Tab>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <div className='tab-container'>
          {tabContents.map((content, index) => {
            if (this.state.activeIndex !== index) return null;

            return (
              <div className='tab-content' key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

class Tab extends Component {
  initTab(tabEl) {
    if (!tabEl) return;
    new MDCTab(tabEl);
  }

  onTabClick = () => {
    ReactGA.event({
      category: gtagTabCategory,
      action: 'tab_clicked',
      label: `tab_clicked_${this.props.children}`
    });
  };

  render() {
    const {isActive, children} = this.props;
    return (
      <button
        ref={this.initTab}
        className={classnames('mdc-tab', 'hero-tab', {'mdc-tab--active': isActive})}
        role='tab'
        aria-selected='false'
        tabIndex='-1'
        onClick={this.onTabClick}
      >
        <span className='mdc-tab__content'>
          <span className='mdc-tab__text-label'>{children}</span>
        </span>
        <span className={classnames('mdc-tab-indicator', {'mdc-tab-indicator--active': isActive})}>
          <span className='mdc-tab-indicator__content mdc-tab-indicator__content--underline'></span>
        </span>
        <span className='mdc-tab__ripple'></span>
      </button>
    );
  }

}

export default HeroComponent;
