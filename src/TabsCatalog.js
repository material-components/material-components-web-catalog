import React, {Component} from 'react';
import classnames from 'classnames';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTabBar} from '@material/tab-bar/index';

import './styles/TabsCatalog.scss';

const TabsCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<TabsHero />}
      title='Tab Bar'
      description='Tabs make it easy to explore and switch between different views.'
      designLink='https://material.io/go/design-tabs'
      docsLink='https://material.io/components/web/catalog/tabs/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar'
      demos={<TabsDemos />}
    />
  );
};

export const TabsHero = () => {
  return (
      <TabBar>
        <Tab active label='Home'/>
        <Tab label='Merchandise'/>
        <Tab label='About Us'/>
      </TabBar>
  )
};

const TabsDemos = () => {
  return (
    <div>
      <h3 className='mdc-typography--subtitle1'>Tabs with icons next to labels</h3>
      <TabBar>
        <Tab active label='Recents' icon='access_time' />
        <Tab label='Nearby' icon='near_me' />
        <Tab label='Favorites' icon='favorite' />
      </TabBar>

      <h3 className='mdc-typography--subtitle1'>Tabs with icons above labels and indicators restricted to content</h3>
      <TabBar>
        <Tab active label='Recents' icon='access_time' stacked contentWidthIndicator />
        <Tab label='Nearby' icon='near_me' stacked contentWidthIndicator />
        <Tab label='Favorites' icon='favorite' stacked contentWidthIndicator />
      </TabBar>

      <h3 className='mdc-typography--subtitle1'>Scrolling tabs</h3>
      <TabBar center>
        <Tab active label='Tab One' />
        <Tab label='Tab Two' />
        <Tab label='Tab Three' />
        <Tab label='Tab Four' />
        <Tab label='Tab Five' />
        <Tab label='Tab Six' />
        <Tab label='Tab Seven' />
        <Tab label='Tab Eight' />
        <Tab label='Tab Nine' />
        <Tab label='Tab Ten' />
        <Tab label='Tab Eleven' />
        <Tab label='Tab Twelve' />
      </TabBar>
    </div>
  )
};

class TabBar extends Component {
  initTabBar = (tabBarEl) => {
    if (!tabBarEl) return;
    this.tabBar = new MDCTabBar(tabBarEl);
  };

  componentWillUnmount() {
    this.tabBar && this.tabBar.destroy();
  }

  render() {
    return (
      <div className='mdc-tab-bar' role='tablist' ref={this.initTabBar}>
        <div className='mdc-tab-scroller'>
          <div className='mdc-tab-scroller__scroll-area'>
            <div className='mdc-tab-scroller__scroll-content'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Tab = (props) => {
  const classes = classnames('mdc-tab', {
    'mdc-tab--active': props.active,
    'mdc-tab--stacked': props.stacked,
  });

  const indicatorClasses = classnames('mdc-tab-indicator', {
    'mdc-tab-indicator--active': props.active,
  });

  function renderIndicator() {
    return (
      <span className={indicatorClasses}>
        <span className='mdc-tab-indicator__content mdc-tab-indicator__content--underline'></span>
      </span>
    );
  }

  return (
    <button className={classes} role='tab' aria-selected={props.active ? 'true' : 'false'} tabIndex={props.active ? '0' : '-1'}>
      <span className='mdc-tab__content'>
        {props.icon &&
          <span className='mdc-tab__icon material-icons' aria-hidden='true'>{props.icon}</span>
        }
        <span className='mdc-tab__text-label'>{props.label}</span>
        { props.contentWidthIndicator && renderIndicator() }
      </span>
      { !props.contentWidthIndicator && renderIndicator() }
      <span className='mdc-tab__ripple'></span>
    </button>
  )
};

export default TabsCatalog;
