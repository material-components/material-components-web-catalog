import React, {Component} from 'react';
import classnames from 'classnames';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTabBar, MDCTabBarScroller} from '@material/tabs';

import './styles/TabsCatalog.scss';

const TabsCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<TabsHero />}
      title='Tabs'
      description='Tabs make it easy to explore and switch between different views.'
      designLink='https://material.io/go/design-tabs'
      docsLink='https://material.io/components/web/catalog/tabs/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs'
      demos={<TabsDemos />}
    />
  );
};

const TabsHero = () => {
  return (
    <TabBar>
      <Tab active name='Home' />
      <Tab name='Merchandise' />
      <Tab name='About Us' />
    </TabBar>
  )
};

const TabsDemos = () => {
  return (
    <div>
      <h3 className='mdc-typography--subtitle1'>Scrolling Tabs</h3>
      <TabScroller>
        <Tab active name='Passionfruit' />
        <Tab name='Orange' />
        <Tab name='Guava' />
        <Tab name='Pitaya' />
        <Tab name='Pineapple' />
        <Tab name='Mango' />
        <Tab name='Papaya' />
        <Tab name='Lychee' />
        <Tab name='Mangosteen' />
        <Tab name='Banana' />
        <Tab name='Pomelo' />
        <Tab name='Tamarind' />
        <Tab name='Durian' />
        <Tab name='Jackfruit' />
      </TabScroller>
    </div>
  )
};

class TabBar extends Component {
  initTabBar = (tabBarEl) => {
    if (!tabBarEl) return;
    this.tabBar = new MDCTabBar(tabBarEl);
  };

  componentWillUnmount() {
    this.tabBar.destroy();
  }

  render() {
    return (
      <nav className='mdc-tab-bar' ref={this.initTabBar}>
        {this.props.children}
        <span className='mdc-tab-bar__indicator'></span>
      </nav>
    )
  }
}

class TabScroller extends Component {
  initTabScroller = (tabScrollEl) => {
    if (!tabScrollEl) return;
    this.tabScroller = new MDCTabBarScroller(tabScrollEl);
  }

  componentWillUnmount() {
    this.tabScroller.destroy();
  }

  render() {
    return (
      <div className='mdc-tab-bar-scroller' ref={this.initTabScroller}>
        <div className='mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back'>
          <span className='mdc-tab-bar-scroller__indicator__inner material-icons' aria-label='scroll back button'>navigate_before</span>
        </div>

        <div className='mdc-tab-bar-scroller__scroll-frame'>
          <nav className='mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs'>
          {this.props.children}
          <span className='mdc-tab-bar__indicator'></span>
          </nav>
        </div>

        <div className='mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward'>
          <span className='mdc-tab-bar-scroller__indicator__inner material-icons' aria-label='scroll forward button'>navigate_next</span>
        </div>
      </div>
    )
  }
}

const Tab = (props) => {
  const classes = classnames('mdc-tab', {
    'mdc-tab--active': props.active,
  });

  return (
    <span className={classes}>{props.name}</span>
  )
};

export default TabsCatalog;
