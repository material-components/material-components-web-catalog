import React from 'react';

import './styles/HeaderBar.scss';
import materialComponentsLogo from './images/ic_component_24px_white.svg';

function HeaderBar(props) {
  return (
    <header className='mdc-top-app-bar catalog-top-app-bar'>
      <div className='mdc-top-app-bar__row'>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
          <HeaderIcon isTopPage={props.isTopPage} />
          <span className='mdc-top-app-bar__title catalog-top-app-bar__title'>
            Material Components for Web
          </span>
        </section>
      </div>
    </header>
  );
}

function HeaderIcon(props) {
  const {PUBLIC_URL, NODE_ENV} = process.env;
  const publicUrl = NODE_ENV === 'production' ? PUBLIC_URL : '/';
  return (
    <a href={publicUrl} className='material-icons mdc-top-app-bar__navigation-icon' title='Home'>
      {
        props.isTopPage ?
          <img src={materialComponentsLogo} alt='Material logo' /> :
          <i className='material-icons' alt='Back button'>&#xE5C4;</i>
      }
    </a>
  );
}

export default HeaderBar;
