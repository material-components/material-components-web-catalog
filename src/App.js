import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import TopAppBarPage from './TopAppBarPage.js';
import HeaderBar from './HeaderBar.js';

import './styles/App.scss';
import buttonImg from './images/ic_button_24px.svg';
import topAppBarImg from './images/ic_button_24px.svg';

const urlToComponentPageMap = {
  '/material-components-web-catalog/button': <ButtonPage />,
  '/material-components-web-catalog/top-app-bar': <TopAppBarPage />,
};

class App extends Component {
  renderListItem(title, imageSource, url) {
    return (
      <li className='catalog-image-list-item mdc-image-list__item'>
        <a href={url}>
          <div className='catalog-image-list-item-container mdc-image-list__image-aspect-container'>
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
    const componentPage = urlToComponentPageMap[window.location.pathname];
    if (componentPage) {
      return componentPage;
    }
    return (
      <div>
        <HeaderBar isTopPage />
        <div className='mdc-top-app-bar--fixed-adjust'>
          <ul id='catalog-image-list' className='mdc-image-list standard-image-list'>
            {this.renderListItem('Button', buttonImg, '/material-components-web-catalog/button')}
            {this.renderListItem('Top App Bar', topAppBarImg, '/material-components-web-catalog/top-app-bar')}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
