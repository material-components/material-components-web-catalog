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
              <a tabIndex='0' className='material-icons mdc-top-app-bar__navigation-icon' ref={this.initRipple}>menu</a>
              <span className='mdc-top-app-bar__title'>Title</span>
            </section>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
              <a tabIndex='0' className='material-icons mdc-top-app-bar__action-item' aria-label='Download' alt='Download' ref={this.initRipple}>file_download</a>
              <a tabIndex='0' className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' alt='Print this page' ref={this.initRipple}>print</a>
              <a tabIndex='0' className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' alt='Bookmark this page' ref={this.initRipple}>bookmark</a>
            </section>
          </div>
        </header>
        </div>
    );
  }
}

class TopAppBarDemos extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderTopAppBarPages(title, variantClass) {
    return (
        <div className='demo'>
          <h3 className='mdc-typography--subheading2'>{title}</h3>
          <div>
            <iframe className='frame' title={title} sandbox='allow-scripts' src={'data:text/html;charset=utf-8,' + encodeURIComponent(this.renderTopAppBarVariant(variantClass)) } />
          </div>
        </div>
    );
  }

  renderTopAppBarVariant(variantClass) {
    return `
      <html>
      ${document.head.innerHTML}
        <body style='height: 500px;'>
          <header class='mdc-top-app-bar ${variantClass}'>
            <div class='mdc-top-app-bar__row'>
              <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
                <a href='#' class='material-icons mdc-top-app-bar__navigation-icon'>menu</a>
                <span class='mdc-top-app-bar__title'>Title</span>
              </section>
              <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
              ${this.renderActionIcons(variantClass)}
              </section>
            </div>
          </header>
          <script type='text/javascript' src='/static/js/bundle.js'></script>
        </body>
      </html>
  `
  }

  renderActionIcons(variantClass) {
    const multipleIcons = variantClass.startsWith('mdc-top-app-bar--short');

    return `
    <a href='#' class='material-icons mdc-top-app-bar__action-item' aria-label='Download' alt='Download'>file_download</a>
    ${multipleIcons ? '' :
      `<a href='#' class='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' alt='Print this page'>print</a>
       <a href='#' class='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' alt='Bookmark this page'>bookmark</a>`}
    `;
  }

  render() {
    return (
        <div className='demos-display'>
          {this.renderTopAppBarPages('Standard', '')}
          {this.renderTopAppBarPages('Short', 'mdc-top-app-bar--short mdc-top-app-bar--short-has-action-item')}
          {this.renderTopAppBarPages('Short Always Collapsed', 'mdc-top-app-bar--short mdc-top-app-bar--short-collapsed mdc-top-app-bar--short-has-action-item')}
          {this.renderTopAppBarPages('Prominent', 'mdc-top-app-bar--prominent')}
          {this.renderTopAppBarPages('Dense', 'mdc-top-app-bar--dense')}
          {this.renderTopAppBarPages('Fixed', 'mdc-top-app-bar--fixed')}
        </div>
    );
  }
}

export default TopAppBarPage;
