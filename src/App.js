import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './styles/App.scss';
import buttonImg from './images/ic_button_24px.svg';

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
    const componentUrl =
      process.env.PUBLIC_URL ? window.location.pathname.split(process.env.PUBLIC_URL)[1] : window.location.pathname;
    const componentPage = componentUrlToPageMap[componentUrl];
    if (componentPage) {
      return componentPage;
    }
    return (
      <div>
        <HeaderBar isTopPage />
        <ul id='catalog-image-list' className='mdc-image-list standard-image-list'>
          {this.renderListItem('Button', buttonImg, `${process.env.PUBLIC_URL}/button`)}
        </ul>
      </div>
    );
  }
}

export default App;
