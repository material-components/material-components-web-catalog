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
          description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
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
  constructor(props) {
    super(props);
    this.initRipple = buttonEl => new MDCRipple(buttonEl);
  }

  componentDidMount() {
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => this.initRipple(button));
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
  constructor(props) {
    super(props);
    this.initRipple = buttonEl => new MDCRipple(buttonEl);
  }

  componentDidMount() {
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => this.initRipple(button));
  }

  renderButtonVariant(title, variant) {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>{title}</h3>
        <button className={'mdc-button ' + variant}>
          Default
        </button>
        <button className={'mdc-button mdc-button--dense ' + variant}>
          Dense
        </button>
        <button className={'mdc-button ' + variant}>
          <i className='material-icons mdc-button__icon'>favorite</i>
          Icon
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderButtonVariant('Text Button')}
        {this.renderButtonVariant('Raised Button', 'mdc-button--raised')}
        {this.renderButtonVariant('Unelevated Button', 'mdc-button--unelevated')}
        {this.renderButtonVariant('Stroked Button', 'mdc-button--stroked')}
      </div>
    );
  }
}

export default ButtonPage;
