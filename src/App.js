import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import HeaderBar from './HeaderBar.js';

import './styles/App.scss';

const urlToComponentPageMap = {
  '/material-components-web-catalog/button': <ButtonPage />,
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
        <HeaderBar title='Material Components Web | Catalog'/>
        <ul id='catalog-image-list' className='mdc-image-list standard-image-list'>
          {this.renderListItem('Button', './images/ic_button_24px.svg', '/material-components-web-catalog/button')}
        </ul>
      </div>
    );
  }
}

export default App;
