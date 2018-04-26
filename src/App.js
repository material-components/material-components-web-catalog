import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import TopAppBarPage from './TopAppBarPage.js';
import TopAppBarDensePage from './iframes/TopAppBarDensePage';
import TopAppBarFixedPage from './iframes/TopAppBarFixedPage';
import TopAppBarStandardPage from './iframes/TopAppBarStandardPage';
import TopAppBarProminentPage from './iframes/TopAppBarProminentPage';
import TopAppBarShortPage from './iframes/TopAppBarShortPage';
import TopAppBarShortCollapsedPage from './iframes/TopAppBarShortCollapsedPage';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';
import {imagePath} from './constants';

import './styles/App.scss';

const componentUrlToPageMap = {
  '/button': <ButtonPage />,
  '/top-app-bar': <TopAppBarPage />,
  '/top-app-bar/dense': <TopAppBarDensePage />,
  '/top-app-bar/fixed': <TopAppBarFixedPage />,
  '/top-app-bar/standard': <TopAppBarStandardPage />,
  '/top-app-bar/prominent': <TopAppBarProminentPage />,
  '/top-app-bar/short': <TopAppBarShortPage />,
  '/top-app-bar/short-collapsed': <TopAppBarShortCollapsedPage />,

};

class App extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = el => this.ripples.push(new MDCRipple(el));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderListItem(title, imageSource, url) {
    return (
      <li className='catalog-image-list-item mdc-image-list__item'>
        <a href={url}>
          <div className='catalog-image-list-item-container mdc-image-list__image-aspect-container mdc-ripple-surface'
               ref={this.initRipple}>
            <img className='catalog-image-list-image mdc-image-list__image' src={imageSource} alt={`${title} icon`}/>
          </div>
        </a>
        <div className='mdc-image-list__supporting'>
          <a href={url} className='catalog-image-list-label mdc-image-list__label'>{title}</a>
        </div>
      </li>
    );
  }

  render() {
    const {PUBLIC_URL, NODE_ENV} = process.env;
    const componentUrl = NODE_ENV === 'production' ?
      window.location.pathname.split(PUBLIC_URL)[1] :
      window.location.pathname;
    const componentPage = componentUrlToPageMap[componentUrl];
    if (componentPage) {
      return componentPage;
    }
    return (
      <div>
        <HeaderBar isTopPage />
        <ul id='catalog-image-list' className='mdc-image-list standard-image-list mdc-top-app-bar--fixed-adjust'>
          {this.renderListItem('Button', `${imagePath}/ic_button_24px.svg`, `${PUBLIC_URL}/button`)}
          {this.renderListItem('Top App Bar', `${imagePath}/ic_button_24px.svg`, `${PUBLIC_URL}/top-app-bar`)}
        </ul>
      </div>
    );
  }
}

export default App;
