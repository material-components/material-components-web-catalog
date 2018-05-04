import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCPersistentDrawer, MDCTemporaryDrawer} from '@material/drawer';

import React, {Component} from 'react';

import '../styles/DrawerFrameCatalog.scss';

const propToVariant = {
  temporary: {title: 'Temporary Drawer', variant: 'mdc-drawer--temporary'},
  persistent: {title: 'Persistent Drawer', variant: 'mdc-drawer--persistent'},
  permanent: {title: 'Permanent Drawer', variant: 'mdc-drawer--permanent'},
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
    return (
        <div className='top-app-bar__frame'>
          <div className='drawer-container-flex'>
            {this.getDrawer(variant)}
            <div className='drawer-header-flex'>
              {this.getTopAppBar(variant)}
            </div>
            <div>
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
            <a className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>inbox</i>Inbox
            </a>
            <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>star</i>Star
            </a>
            <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>send</i>Sent Mail
            </a>
            <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
              <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>drafts</i>Drafts
            </a>
          </div>

          <hr className='mdc-list-divider' />

            <div className='mdc-list'>
              <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>email</i>All Mail
              </a>
              <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>delete</i>Trash
              </a>
              <a className='mdc-list-item demo-drawer-list-item' data-mdc-tabindex-handled='true' tabIndex='-1'>
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
