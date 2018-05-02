import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCPersistentDrawer, MDCTemporaryDrawer} from '@material/drawer';

import React, {Component} from 'react';

import '../styles/DrawerFramePage.scss';

const propToVariant = {
  temporary: {title: 'Temporary Drawer', variant: 'mdc-drawer--temporary'},
  persistent: {title: 'Persistent Drawer', variant: 'mdc-drawer--persistent'},
  permanent: {title: 'Permanent Drawer', variant: 'mdc-drawer--permanent'},
  permanentBelowTopAppBar: {title: 'Permanent Drawer Below Toolbar', variant: 'mdc-drawer--permanent'},
};

class DrawerFramePage extends Component {

  topAppBar = null;
  drawer = null;

  initDrawer = drawerEle => {
    const {match} = this.props;
    if(match.params.type === 'temporary') {
      this.drawer = new MDCTemporaryDrawer(drawerEle);
    } else if (match.params.type === 'persistent') {
      this.drawer = new MDCPersistentDrawer(drawerEle);
    }
  };

  initTopAppBar = topAppBarEle => {
    const {match} = this.props;
    this.topAppBar = new MDCTopAppBar(topAppBarEle);

    if (match.params.type === 'temporary' || match.params.type === 'persistent') {
      topAppBarEle.addEventListener('MDCTopAppBar:nav', () => this.drawer.open = !this.drawer.open);
    }
  };


  render() {
    const {match} = this.props;
    const variant = propToVariant[match.params.type];
    const addFlexClass = variant !== propToVariant.permanentBelowTopAppBar;
    return (
        <div className='top-app-bar__frame'>
          <div className={addFlexClass ? 'drawer-container-flex' : ''}>
            {this.getDrawer(variant)}
            <div className={addFlexClass ? 'drawer-header-flex' : ''}>
            {this.getTopAppBar(variant)}
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

  getDrawer(type = propToVariant.temporary) {
    return (
        <aside className={`mdc-drawer ${type.variant}`} ref={this.initDrawer}>
      <nav className='mdc-drawer__drawer'>
        <header className='mdc-drawer__header'>
          <div className='mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg'>
            Header here
          </div>
        </header>
        <nav className='mdc-drawer__content mdc-list-group'>
          <div id='icon-with-text-demo' className='mdc-list'>
            <a className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>inbox</i>Inbox
            </a>
            <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>star</i>Star
            </a>
            <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>send</i>Sent Mail
            </a>
            <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>drafts</i>Drafts
            </a>
          </div>

          <hr className='mdc-list-divider' />

            <div className='mdc-list'>
              <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>email</i>All Mail
              </a>
              <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>delete</i>Trash
              </a>
              <a className='mdc-list-item demo-drawer-list-item' href='#' data-mdc-tabindex-handled='true' tabIndex='-1'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>report</i>Spam
              </a>
            </div>
        </nav>
      </nav>
    </aside>
  );
  }

  getTopAppBar(type = propToVariant.temporary) {
    return (
        <header className='mdc-top-app-bar' style={{top: 0}} ref={this.initTopAppBar}>
          <div className='mdc-top-app-bar__row'>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <button className='material-icons mdc-top-app-bar__navigation-icon'>menu</button>
              <span className='mdc-top-app-bar__title'>{type.title}</span>
            </section>
          </div>
        </header>
    );
  }
}

export default DrawerFramePage;
