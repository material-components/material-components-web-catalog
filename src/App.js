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
      <a href={url} className='catalog-image-list-item mdc-image-list__item mdc-ripple-surface'>
        <div className='mdc-image-list__image-aspect-container'>
          <img className='catalog-image-list-image mdc-image-list__image' src={imageSource} alt={`${title} icon`}/>
        </div>
        <div className='catalog-image-list-supporting mdc-image-list__supporting'>
          <span className='catalog-image-list-label mdc-image-list__label'>{title}</span>
        </div>
      </a>
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
