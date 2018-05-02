import React, {Component} from 'react';

import './styles/HeaderBar.scss';
import {MDCTopAppBar} from '@material/top-app-bar';
import {imagePath} from './constants';
import {Link} from 'react-router-dom';

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
              <HeaderIcon isTopPage={this.props.isTopPage}/>
              <span className='mdc-top-app-bar__title catalog-top-app-bar__title'>
              Material Components for Web
              </span>
            </section>
          </div>
        </header>
    )
  }
}

function HeaderIcon(props) {
  return (
    <Link to='/' className='material-icons mdc-top-app-bar__navigation-icon' title='Home'>
      {
        props.isTopPage ?
          <img src={`${imagePath}/ic_component_24px_white.svg`} alt='Material logo' /> :
          <i className='material-icons' alt='Back button'>&#xE5C4;</i>
      }
    </Link>
  );
}

export default HeaderBar;
