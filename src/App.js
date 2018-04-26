import React, { Component } from 'react';
import ButtonPage from './ButtonPage';
import HeaderBar from './HeaderBar';
import {MDCRipple} from '@material/ripple';
import {imagePath} from './constants';

import './styles/App.scss';

const pageExt = process.env.MDC_NO_JEKYLL ? '.html' : '';

const componentUrlToPageMap = {
  '/button': <ButtonPage />,
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
    const fullUrl = `${process.env.PUBLIC_URL}/${url}${pageExt}`;
    return (
      <li className='catalog-image-list-item mdc-image-list__item'>
        <a href={fullUrl}>
          <div className='catalog-image-list-item-container mdc-image-list__image-aspect-container mdc-ripple-surface'
               ref={this.initRipple}>
            <img className='catalog-image-list-image mdc-image-list__image' src={imageSource} alt={`${title} icon`}/>
          </div>
        </a>
        <div className='mdc-image-list__supporting'>
          <a href={fullUrl} className='catalog-image-list-label mdc-image-list__label'>{title}</a>
        </div>
      </li>
    );
  }

  render() {
    const {PUBLIC_URL, NODE_ENV} = process.env;
    const componentUrl = NODE_ENV === 'production' ?
      window.location.pathname.split(PUBLIC_URL)[1] :
      window.location.pathname;
    const componentPage = componentUrlToPageMap[componentUrl.slice(0, componentUrl.length - pageExt.length)];
    if (componentPage) {
      return componentPage;
    }
    return (
      <div>
        <HeaderBar isTopPage />
        <ul id='catalog-image-list' className='mdc-image-list standard-image-list mdc-top-app-bar--fixed-adjust'>
          {this.renderListItem('Button', `${imagePath}/ic_button_24px.svg`, 'button')}
        </ul>
      </div>
    );
  }
}

export default App;
