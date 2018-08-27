import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

import {MDCRipple} from '@material/ripple/dist/mdc.ripple';
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

class DrawerHero extends Component {
  ripples = [];
  initRipple = icon => {
    if (!icon) return;
    const current = new MDCRipple(icon);
    current.unbounded = true;
    this.ripples.push(current);
  };

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div className='hero-drawer'>
        <aside id='demo-drawer' class='mdc-drawer demo-drawer' ref={this.initDrawer}>
          <div class='mdc-drawer__header'>
            <h3 class='mdc-drawer__title'>Title</h3>
            <h6 class='mdc-drawer__subtitle'>subtext</h6>
          </div>
          <div class='mdc-drawer__content'>
            <nav class='mdc-list'>
              <a class='mdc-list-item mdc-list-item--activated' href='#'>
                <i class='material-icons mdc-list-item__graphic' aria-hidden='true'>inbox</i>Inbox
              </a>
              <a class='mdc-list-item' href='#'>
                <i class='material-icons mdc-list-item__graphic' aria-hidden='true'>star</i>Star
              </a>
              <a class='mdc-list-item' href='#'>
                <i class='material-icons mdc-list-item__graphic' aria-hidden='true'>send</i>Sent Mail
              </a>
              <a class='mdc-list-item' href='#'>
                <i class='material-icons mdc-list-item__graphic' aria-hidden='true'>drafts</i>Drafts
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
        {this.getVariant('Temporary', 'temporary')}
        {this.getVariant('Persistent', 'persistent')}
        {this.getVariant('Permanent', 'permanent')}
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
