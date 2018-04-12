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
    this.ripples = [];
    this.initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div>
        <button className='mdc-button' ref={this.initRipple}>
          Text
        </button>
        <button className='mdc-button mdc-button--raised' ref={this.initRipple}>
          Raised
        </button>
        <button className='mdc-button mdc-button--unelevated' ref={this.initRipple}>
          Unelevated
        </button>
        <button className='mdc-button mdc-button--stroked' ref={this.initRipple}>
          Stroked
        </button>
      </div>
    );
  }
}

class ButtonDemos extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderButtonVariant(title, variantClass) {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>{title}</h3>
        <button className={`mdc-button ${variantClass}`} ref={this.initRipple}>
          Default
        </button>
        <button className={`mdc-button mdc-button--dense ${variantClass}`} ref={this.initRipple}>
          Dense
        </button>
        <button className={`mdc-button ${variantClass}`} ref={this.initRipple}>
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
