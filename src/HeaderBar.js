import React, {Component} from 'react';

import './styles/HeaderBar.scss';
import {MDCTopAppBar} from '@material/top-app-bar';
import {imagePath} from './constants';

class HeaderBar extends Component {
  componentDidMount() {
    MDCTopAppBar.attachTo(this.refs.demoTopAppBar);
  }

  render () {
    return (
        <header className='mdc-top-app-bar catalog-top-app-bar' ref='demoTopAppBar'>
          <div className='mdc-top-app-bar__row'>
            <section
                className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <HeaderIcon toggleDrawer={this.props.toggleDrawer} isTopPage={this.props.isTopPage}/>
              <span className='mdc-top-app-bar__title catalog-top-app-bar__title'>
              Material Components for the Web
              </span>
            </section>
          </div>
        </header>
    )
  }
}

function HeaderIcon(props) {
  return (
    <button className='material-icons mdc-top-app-bar__navigation-icon' title='Home' onClick={props.toggleDrawer}>
      {
        props.isTopPage ?
          <img src={`${imagePath}/ic_component_24px_white.svg`} alt='Material logo' /> :
          <i className='material-icons' alt='Menu button'>menu</i>
      }
    </button>
  );
}

export default HeaderBar;
