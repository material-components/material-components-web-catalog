import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple/index';
import ReactGA from 'react-ga';

import './styles/ButtonCatalog.scss';
import {gtagButtonAction, gtagCategory} from './constants';

const ButtonCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<ButtonHero />}
      title='Button'
      description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/go/design-buttons'
      docsLink='https://material.io/components/web/catalog/buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
      demos={<ButtonDemos />}
    />
  );
}

export class ButtonHero extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.clickEvent = (el) => ReactGA.event({category: gtagCategory, action: gtagButtonAction, label: el.target.textContent.trim()});
    this.initRipple = buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div>
        <button className='hero-button mdc-button' ref={this.initRipple} onClick={this.clickEvent}>
          <span className='mdc-button__label'>Text</span>
        </button>
        <button className='hero-button mdc-button mdc-button--raised' ref={this.initRipple} onClick={this.clickEvent}>
          <span className='mdc-button__label'>Raised</span>
        </button>
        <button className='hero-button mdc-button mdc-button--unelevated' ref={this.initRipple} onClick={this.clickEvent}>
          <span className='mdc-button__label'>Unelevated</span>
        </button>
        <button className='hero-button mdc-button mdc-button--outlined' ref={this.initRipple} onClick={this.clickEvent}>
          <span className='mdc-button__label'>Outlined</span>
        </button>
      </div>
    );
  }
}

class ButtonDemos extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderButtonVariant(title, variantClass) {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <span className='mdc-button__label'>Default</span>
        </button>
        <button className={`demo-button mdc-button mdc-button--dense ${variantClass}`} ref={this.initRipple}>
          <span className='mdc-button__label'>Dense</span>
        </button>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <i className='material-icons mdc-button__icon'>favorite</i>
          <span className='mdc-button__label'>Icon</span>
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
        {this.renderButtonVariant('Outlined Button', 'mdc-button--outlined')}
        {this.renderButtonVariant('Shaped Button', 'mdc-button--unelevated demo-button-shaped')}
      </div>
    );
  }
}

export default ButtonCatalog;
