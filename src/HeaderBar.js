import React, { Component } from 'react';

import './styles/HeaderBar.scss';
import material_components_logo from './images/ic_component_24px_white.svg';

class HeaderBar extends Component {
  render() {
    return (
      <header className='mdc-top-app-bar'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <a href='/' className='material-icons mdc-top-app-bar__navigation-icon' title='Home'>
              <img src={material_components_logo} alt='Material logo'/>
            </a>
            <span className='mdc-top-app-bar__title'>{this.props.title}</span>
          </section>
        </div>
      </header>
    );
  }
}

export default HeaderBar;
