import React, { Component } from 'react';
import './HeaderBar.scss';

class HeaderBar extends Component {
  render() {
    return (
      <header className='mdc-top-app-bar'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <a href='/' className='material-icons mdc-top-app-bar__navigation-icon'>
              <img src='ic_component_24px_white.svg'/>
            </a>
            <span className='mdc-top-app-bar__title'>{this.props.title}</span>
          </section>
        </div>
      </header>
    );
  }
}

export default HeaderBar;
