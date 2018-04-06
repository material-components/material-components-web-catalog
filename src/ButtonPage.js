import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './ButtonPage.scss';

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <HeaderBar title='Button'/>
        <ComponentPage
          hero={<ButtonHero/>}
          sidebarComponentSelector='.sidebar-buttons'
          title='Buttons'
          description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places
          like dialogs, forms, cards, and toolbars.'
          designLink='https://material.io/guidelines/components/buttons.html'
          docsLink='https://material.io/components/web/catalog/buttons/'
          sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
          demos={<ButtonDemos/>}
        />
      </div>
    );
  }
}

class ButtonHero extends Component {
  componentDidMount() {
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => new MDCRipple(button));
  }

  render() {
    return (
      <div>
        <button className='mdc-button'>
          Text
        </button>
        <button className='mdc-button mdc-button--raised'>
          Raised
        </button>
        <button className='mdc-button mdc-button--unelevated'>
          Unelevated
        </button>
        <button className='mdc-button mdc-button--stroked'>
          Stroked
        </button>
      </div>
    );
  }
}

class ButtonDemos extends Component {
  componentDidMount() {
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => new MDCRipple(button));
  }

  render() {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>Text Button</h3>
        <div className='button-wrapper'>
          <button className='mdc-button'>
            Default
          </button>
          <button className='mdc-button mdc-button--dense'>
            Dense
          </button>
          <button className='mdc-button'>
            <i className='material-icons mdc-button__icon'>favorite</i>
            Icon
          </button>
        </div>

        <h3 className='mdc-typography--subheading2'>Raised Button</h3>
        <div className='button-wrapper'>
          <button className='mdc-button mdc-button--raised'>
            Default
          </button>
          <button className='mdc-button mdc-button--raised mdc-button--dense'>
            Dense
          </button>
          <button className='mdc-button mdc-button--raised'>
            <i className='material-icons mdc-button__icon'>favorite</i>
            Icon
          </button>
        </div>

        <h3 className='mdc-typography--subheading2'>Unelevated Button</h3>
        <div className='button-wrapper'>
          <button className='mdc-button mdc-button--unelevated'>
            Default
          </button>
          <button className='mdc-button mdc-button--unelevated mdc-button--dense'>
            Dense
          </button>
          <button className='mdc-button mdc-button--unelevated'>
            <i className='material-icons mdc-button__icon'>favorite</i>
            Icon
          </button>
        </div>

        <h3 className='mdc-typography--subheading2'>Stroked Button</h3>
        <div className='button-wrapper'>
          <button className='mdc-button mdc-button--stroked'>
            Default
          </button>
          <button className='mdc-button mdc-button--stroked mdc-button--dense'>
            Dense
          </button>
          <button className='mdc-button mdc-button--stroked'>
            <i className='material-icons mdc-button__icon'>favorite</i>
            Icon
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonPage;
