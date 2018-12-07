import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

import {MDCRipple} from '@material/ripple/index';
import {MDCList} from '@material/list/index';
import './styles/DrawerCatalog.scss';

const DrawerCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<DrawerHero/>}
      title='Drawer'
      description='The navigation drawer slides in from the left and contains the navigation destinations for your app.'
      designLink='https://material.io/go/design-navigation-drawer'
      docsLink='https://material.io/components/web/catalog/drawers/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer'
      demos={<DrawerDemos {...props} />}
    />
  );
};

export class DrawerHero extends Component {
  ripples = [];
  list = {};
  initRipple = icon => {
    if (!icon) return;
    const current = new MDCRipple(icon);
    current.unbounded = true;
    this.ripples.push(current);
  };

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
    this.list.destroy();
  }

  initDrawer = drawerEle => {
    if (!drawerEle) return;

    this.list = MDCList.attachTo(drawerEle.querySelector('.mdc-list'));
    this.list.wrapFocus = true;
  };

  handleNavigationItemClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='hero-drawer'>
        <aside id='demo-drawer' className='mdc-drawer demo-drawer' ref={this.initDrawer}>
          <div className='mdc-drawer__header'>
            <h3 className='mdc-drawer__title'>Title</h3>
            <h6 className='mdc-drawer__subtitle'>subtext</h6>
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
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

class DrawerDemos extends Component {
  render() {
    return (
      <div className='demos-display'>
        {this.getVariant('Permanent', 'permanent')}
        {this.getVariant('Dismissible', 'dismissible')}
        {this.getVariant('Modal', 'modal')}
      </div>
    );
  }

  getVariant(title, path) {
    const {match} = this.props;
    const drawerVariantLink = `#${match.url}/${path}`;
    const src = `${window.location.protocol}//${window.location.host}${window.location.pathname}?bust${drawerVariantLink}`;

    return (
      <div className='drawer-demo'>
        <div>
          <a href={drawerVariantLink} target='_blank'>
            <h3 className='mdc-typography--subtitle1'>{title}</h3>
          </a>
        </div>
        <div>
          <iframe className='drawer-iframe' title={title} src={src} />
        </div>
      </div>
    );
  }
}

export default DrawerCatalog;
