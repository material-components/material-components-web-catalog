import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';

import {MDCRipple} from '@material/ripple/dist/mdc.ripple';
import './styles/TopAppBarPage.scss';

const TopAppBarPage = () => {
  return (
      <div>
        <HeaderBar title='Top App Bar'/>
        <ComponentPage
            hero={<TopAppBarHero/>}
            title='Top App Bar'
            description='Top App Bars do stuff'
            designLink='https://material.io/guidelines/components/app-bar-top.html'
            docsLink='https://material.io/components/web/catalog/topappbars/'
            sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar'
            demos={<TopAppBarDemos/>}
        />
      </div>
  );
};

class TopAppBarHero extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = icon => {
      const current = new MDCRipple(icon);
      current.unbounded = true;
      this.ripples.push(current);
    }
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
        <div className='hero-top-app-bar'>
          <header className='mdc-top-app-bar'>
            <div className='mdc-top-app-bar__row'>
              <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
                <a className='material-icons mdc-top-app-bar__navigation-icon' ref={this.initRipple}>menu</a>
                <span className='mdc-top-app-bar__title'>San Francisco</span>
              </section>
              <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
                <button className='material-icons mdc-top-app-bar__action-item' aria-label='Download' ref={this.initRipple}>file_download</button>
                <button className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' ref={this.initRipple}>print</button>
                <button className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' ref={this.initRipple}>bookmark</button>
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
          {this.getVariant('Prominent', 'prominent')}
          {this.getVariant('Dense', 'dense')}
          {this.getVariant('Short', 'short')}
          {this.getVariant('Short - Always Collapsed', 'short-collapsed')}
          {this.getVariant('Fixed', 'fixed')}
        </div>
    );
  }

  getVariant(title, path) {
    const {PUBLIC_URL} = process.env;
    return (
        <div className='demo'>
          <h3 className='mdc-typography--subheading2'>{title}</h3>
          <div>
            <iframe className='frame' title={title} sandbox='allow-scripts' src={PUBLIC_URL + '/top-app-bar/' + path} />
          </div>
        </div>
    );
  }
}

export default TopAppBarPage;
