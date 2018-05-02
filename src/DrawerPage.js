import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';

import {MDCRipple} from '@material/ripple/dist/mdc.ripple';
import './styles/DrawerPage.scss';

const pageExt = process.env.MDC_NO_JEKYLL ? '.html' : '';

const DrawerPage = () => {
  return (
    <div>
      <HeaderBar title='Drawer'/>
      <ComponentPage
        hero={<DrawerHero/>}
        title='Drawer'
        description='The navigation drawer slides in from the left and contains the navigation destinations for your app.'
        designLink='https://material.io/guidelines/patterns/navigation-drawer.html'
        docsLink='https://material.io/components/web/catalog/drawers/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer'
        demos={<DrawerDemos/>}
      />
    </div>
  );
};

class DrawerHero extends Component {

  ripples = [];
  initRipple = icon => {
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
        <aside className='mdc-drawer mdc-drawer--permanent' ref={this.initDrawer}>
          <nav className='mdc-drawer__drawer'>
            <header className='mdc-drawer__header'>
              <div className='mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg'>
                Header here
              </div>
            </header>
            <nav className='mdc-drawer__content mdc-list-group'>
              <div id='icon-with-text-demo' className='mdc-list'>
                <a className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' href='#' ref={this.initRipple} data-mdc-tabindex-handled='true' tabIndex='-1'>
                  <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>inbox</i>Inbox
                </a>
                <a className='mdc-list-item demo-drawer-list-item' href='#' ref={this.initRipple} data-mdc-tabindex-handled='true' tabIndex='-1'>
                  <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>star</i>Star
                </a>
                <a className='mdc-list-item demo-drawer-list-item' href='#' ref={this.initRipple} data-mdc-tabindex-handled='true' tabIndex='-1'>
                  <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>send</i>Sent Mail
                </a>
                <a className='mdc-list-item demo-drawer-list-item' href='#' ref={this.initRipple} data-mdc-tabindex-handled='true' tabIndex='-1'>
                  <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>drafts</i>Drafts
                </a>
              </div>
            </nav>
          </nav>
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
        {this.getVariant('Permanent Below Top App Bar', 'permanentBelowTopAppBar')}
      </div>
    );
  }

  getVariant(title, path) {
    const {PUBLIC_URL} = process.env;
    return (
      <div className='drawer-demo'>
        <div>
          <a href={`${PUBLIC_URL}/drawer/${path}${pageExt}`} target='_blank'>
            <h3 className='mdc-typography--subtitle2'>{title}</h3>
          </a>
        </div>
        <div>
          <iframe className='drawer-iframe' title={title} sandbox='allow-scripts' src={`${PUBLIC_URL}/drawer/${path}${pageExt}`} />
        </div>
      </div>
    );
  }
}

export default DrawerPage;
