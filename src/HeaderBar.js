import React, {Component} from 'react';

import './styles/HeaderBar.scss';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {imagePath} from './constants';

class HeaderBar extends Component {
  componentDidMount() {
    this.props.scrollTarget((scrollTarget) => {
      const topAppBar = MDCTopAppBar.attachTo(this.refs.demoTopAppBar);
      topAppBar.setScrollTarget(scrollTarget);
    });
  }

  render () {
    return (
        <header className='mdc-top-app-bar catalog-top-app-bar' ref='demoTopAppBar'>
          <div className='mdc-top-app-bar__row'>
            <section
                className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <HeaderIcon toggleDrawer={this.props.toggleDrawer} isTopPage={this.props.isTopPage}/>
              <span className='mdc-top-app-bar__title catalog-top-app-bar__title'>
                <span className='catalog-top-app-bar__title--small-screen'>
                  MDC Web
                </span>
                <span className='catalog-top-app-bar__title--large-screen'>
                  Material Components for the Web
                </span>
              </span>
            </section>
          </div>
        </header>
    )
  }
}

function HeaderIcon(props) {
  return (
    <button className='mdc-icon-button material-icons mdc-top-app-bar__navigation-icon' title='Home' onClick={props.toggleDrawer}>
      {
        props.isTopPage ?
          <img src={`${imagePath}/ic_component_24px_white.svg`} alt='Material logo' /> :
          <i className='material-icons' alt='Menu button'>menu</i>
      }
    </button>
  );
}

export default HeaderBar;
