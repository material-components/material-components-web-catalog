import React, { Component } from 'react';

import './styles/HeaderBar.scss';
import materialComponentsLogo from './images/ic_component_24px_white.svg';

class HeaderBar extends Component {
  render() {
    return (
      <header className='mdc-top-app-bar catalog-top-app-bar'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {this.renderLogo()}
            <span className='mdc-top-app-bar__title catalog-top-app-bar__title'>
              Material Components for Web
            </span>
          </section>
        </div>
      </header>
    );
  }

  renderLogo() {
    const isAtComponentPath = window.location.pathname.split('/material-components-web-catalog').length > 1;

    return (
      <a href='/' className='material-icons mdc-top-app-bar__navigation-icon' title='Home'>
        {
          isAtComponentPath ?
            <i className='material-icons' alt='Back button'>&#xE5C4;</i> :
            <img src={materialComponentsLogo} alt='Material logo'/>
        }
      </a>
    );
  }
}

export default HeaderBar;
