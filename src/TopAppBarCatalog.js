import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

import {MDCRipple} from '@material/ripple/dist/mdc.ripple';
import './styles/TopAppBarCatalog.scss';

const TopAppBarCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<TopAppBarHero/>}
      title='Top App Bar'
      description='Top App Bars are a container for items such as application title, navigation icon, and action items.'
      designLink='https://material.io/go/design-app-bar-top'
      docsLink='https://material.io/components/web/catalog/top-app-bar/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar'
      demos={<TopAppBarDemos {...props}/>}
      {...props}
    />
  );
};

class TopAppBarHero extends Component {

  ripples = [];

  initRipple = icon => {
    if (!icon) return;
    const current = new MDCRipple(icon);
    current.unbounded = true;
    this.ripples.push(current);
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    const topAppBarIconsClasses = 'material-icons mdc-top-app-bar__action-item';

    return (
      <div className='hero-top-app-bar'>
        <header className='mdc-top-app-bar'>
          <div className='mdc-top-app-bar__row'>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <button className='material-icons mdc-top-app-bar__navigation-icon' ref={this.initRipple}>menu</button>
              <span className='mdc-top-app-bar__title'>San Francisco</span>
            </section>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
              <button className={topAppBarIconsClasses} aria-label='Download' ref={this.initRipple}>file_download</button>
              <button className={topAppBarIconsClasses} aria-label='Print this page' ref={this.initRipple}>print</button>
              <button className={topAppBarIconsClasses} aria-label='Bookmark this page' ref={this.initRipple}>bookmark</button>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

class TopAppBarDemos extends Component {
  render() {
    return (
      <div className='demos-display'>
        {this.getVariant('Standard', 'standard')}
        {this.getVariant('Fixed', 'fixed')}
        {this.getVariant('Dense', 'dense')}
        {this.getVariant('Prominent', 'prominent')}
        {this.getVariant('Short', 'short')}
        {this.getVariant('Short - Always Collapsed', 'short-collapsed')}
      </div>
    );
  }

  getVariant(title, path) {
    const {match} = this.props;
    const topAppBarVariantLink = `#${match.url}/${path}`;
    const src = `${window.location.protocol}//${window.location.host}${window.location.pathname}?bust${topAppBarVariantLink}`;

    return (
      <div className='demo'>
        <div>
          <a href={topAppBarVariantLink} target='_blank'>
            <h3 className='mdc-typography--subtitle1'>{title}</h3>
          </a>
        </div>
        <div>
          <iframe className='frame' title={title} src={src} />
        </div>
      </div>
    );
  }
}

export default TopAppBarCatalog;
