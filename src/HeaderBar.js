import React, { Component } from 'react';
import {MDCTopAppBar} from '@material/top-app-bar';

import './styles/HeaderBar.scss';
import materialComponentsLogo from './images/ic_component_24px_white.svg';

class HeaderBar extends Component {

  componentDidMount = () => {
    MDCTopAppBar.attachTo(this.refs.demoTopAppBar);
  };

  render() {
    return (
      <header className='mdc-top-app-bar demo-header' ref='demoTopAppBar'>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <a href='/material-components-web-catalog' className='material-icons mdc-top-app-bar__navigation-icon' title='Home'>
              <img src={materialComponentsLogo} alt='Material logo'/>
            </a>
            <span className='mdc-top-app-bar__title'>{this.props.title}</span>
          </section>
        </div>
      </header>
  );
  }
}

export default HeaderBar;
