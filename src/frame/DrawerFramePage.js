import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCList} from '@material/list/index';
import {MDCDrawer} from '@material/drawer/index';

import React, {Component} from 'react';

import '../styles/DrawerFrameCatalog.scss';

const propToVariant = {
  permanent: {title: 'Permanent Drawer', variant: ' '},
  dismissible: {title: 'Dismissible Drawer', variant: 'mdc-drawer--dismissible'},
  modal: {title: 'Modal Drawer', variant: 'mdc-drawer--modal'},
};

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.`;

class DrawerFramePage extends Component {

  topAppBar = null;
  drawer = null;

  initDrawer = drawerEle => {
    if (!drawerEle) return;

    const {match} = this.props;
    if (match.params.type === 'dismissible' ||
        match.params.type === 'modal') {
      this.drawer = new MDCDrawer(drawerEle);
    } else {
      const list = MDCList.attachTo(drawerEle.querySelector('.mdc-list'));
      list.wrapFocus = true;
    }
  };

  initTopAppBar = topAppBarEle => {
    const {match} = this.props;
    this.topAppBar = new MDCTopAppBar(topAppBarEle);


    if (match.params.type === 'dismissible' || match.params.type === 'modal') {
      topAppBarEle.addEventListener('MDCTopAppBar:nav', () => this.drawer.open = !this.drawer.open);
    }
  };

  initScrollableMainContent = scrollableMainContentEle => {
    this.topAppBar.setScrollTarget(scrollableMainContentEle);
  };

  render() {
    const {match} = this.props;
    const variant = propToVariant[match.params.type];
    const appContentClass = match.params.type === 'dismissible' ? 'mdc-drawer-app-content' : 'drawer-frame-app-content';
    return (
        <div className='drawer-frame-root'>
          {this.getDrawer(variant)}
          {this.getScrim(variant)}
          <div className={appContentClass}>
            {this.getTopAppBar(variant)}
            <div className='drawer-main-content' ref={this.initScrollableMainContent}>
              <div className='mdc-top-app-bar--fixed-adjust'></div>
              <p>
                {loremIpsum}
              </p>
              <p>
                {loremIpsum}
              </p>
              <p>
                {loremIpsum}
              </p>
              <p>
                {loremIpsum}
              </p>
            </div>
          </div>
        </div>
    );
  }

  componentWillUnmount() {
    if (this.topAppBar) {
      this.topAppBar.destroy();
    }
  }

  getDrawer(type = propToVariant.permanent) {
    return (
        <aside className={`mdc-drawer ${type.variant}`} ref={this.initDrawer}>
          <div className='mdc-drawer__header'>
            <h3 className='mdc-drawer__title'>Mail</h3>
            <h6 className='mdc-drawer__subtitle'>email@material.io</h6>
          </div>
          <div className='mdc-drawer__content'>
            <nav className='mdc-list'>
              <a className='mdc-list-item mdc-list-item--activated' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>inbox</i>Inbox
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>star</i>Star
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>send</i>Sent Mail
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>drafts</i>Drafts
              </a>
              <hr className='mdc-list-divider' />

              <h6 className='mdc-list-group__subheader'>Labels</h6>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>bookmark</i>Family
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>bookmark</i>Friends
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>bookmark</i>Work
              </a>

              <hr className='mdc-list-divider' />
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>settings</i>Settings
              </a>
              <a className='mdc-list-item' href='#' onClick={this.handleNavigationItemClick}>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>announcement</i>Help & feedback
              </a>
            </nav>
          </div>
        </aside>
  );
  }

  getTopAppBar(type = propToVariant.temporary) {
    return (
        <header className='mdc-top-app-bar drawer-top-app-bar' ref={this.initTopAppBar}>
          <div className='mdc-top-app-bar__row'>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              {this.getNavigationIcon(type)}
              <span className='mdc-top-app-bar__title'>{type.title}</span>
            </section>
          </div>
        </header>
    );
  }

  getNavigationIcon(type) {
    if(type !== propToVariant.permanent) {
      return (
          <button
              className='mdc-icon-button material-icons mdc-top-app-bar__navigation-icon'>menu</button>
      )
    }
  }

  getScrim(type) {
    if (type === propToVariant.modal) {
      return (
        <div className='mdc-drawer-scrim'></div>
      );
    }
  }

  handleNavigationItemClick(event) {
    event.preventDefault();
  }
}

export default DrawerFramePage;
