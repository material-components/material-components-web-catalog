import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple/index';
import * as classnames from 'classnames';
import ReactGA from 'react-ga';

import './styles/ButtonCatalog.scss';
import {gtagButtonAction, gtagCategory} from './constants';

const ButtonCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<ButtonHero />}
      title='Button'
      description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/go/design-buttons'
      docsLink='https://material.io/components/web/catalog/buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
      demos={<ButtonDemos />}
      initialConfig={ButtonConfig}
      {...props}
    />
  );
};


// This is retained for the material experiment and will be dead code that we can remove when
// experiment is completed.
export class ButtonHeroLegacy extends Component {
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
          Text
        </button>
        <button className='hero-button mdc-button mdc-button--raised' ref={this.initRipple} onClick={this.clickEvent}>
          Raised
        </button>
        <button className='hero-button mdc-button mdc-button--unelevated' ref={this.initRipple} onClick={this.clickEvent}>
          Unelevated
        </button>
        <button className='hero-button mdc-button mdc-button--outlined' ref={this.initRipple} onClick={this.clickEvent}>
          Outlined
        </button>
      </div>
    );
  }

}

export class ButtonHero extends Component {
  label = 'Button Text';
  ripple = null;
  buttonRef = (el) => {
    if (el) this.ripple = new MDCRipple(el);
  };

  componentWillUnmount() {
    if (this.ripple) this.ripple.destroy();
  }

  render() {
    if (this.props.config) {
      this.selectedType = this.props.config.options[1].value;
    }

    const className = classnames('hero-button mdc-button', {
      [ButtonTypes[this.selectedType]]: this.selectedType,
      'mdc-ripple-upgraded': this.ripple,
    });

    return (
      <button className={className} ref={this.buttonRef}>
        {this.props.config.options[2].value}
      </button>
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
          Default
        </button>
        <button className={`demo-button mdc-button mdc-button--dense ${variantClass}`} ref={this.initRipple}>
          Dense
        </button>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
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
        {this.renderButtonVariant('Outlined Button', 'mdc-button--outlined')}
        {this.renderButtonVariant('Shaped Button', 'mdc-button--unelevated demo-button-shaped')}
      </div>
    );
  }
}

/**
 * This is the object that configures how the options panel looks and
 * and what types of options the user can change. This object also contains
 * information about what urlParam the option will use to ensure the user
 * can share links of their configured component. A copy of this object will be
 * made and used to manage the current state of the hero component and used to
 * generate the code snippet.
 */
const ButtonConfig = {
  afterUpdate: () => {
    // Function that will be executed after every update. Make any adjustments
    // to this object here such as enabling/disabling fields.
  },
  options: [
    {
      type: 'label',
      name: 'Options',
    },
    {
      type: 'radiogroup',
      name: 'Type',
      urlParam: 'type',
      value: 'text', // default select first option
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Outlined',
          value: 'outlined',
        },
        {
          label: 'Raised',
          value: 'raised',
        },
        {
          label: 'Unelevated',
          value: 'unelevated',
        },
      ],
    },
    {
      type: 'textfield',
      name: 'Label',
      label: 'Label',
      urlParam: 'label',
      value: 'Button Text'
    }
  ],
};

const ButtonTypes = {
  text: '',
  raised: 'mdc-button--raised',
  unelevated: 'mdc-button--unelevated',
  outlined: 'mdc-button--outlined',
};

export const ButtonReactTemplate = (config) => {
  const label = config.options[2].value;
  const type = config.options[1].value;
  // TODO: Wire these up when the Config is complete
  const dense = '';
  const icon = '';
  const state = '';

  return `<Button
  ${type ? type + '\n' : ''}
  ${dense ? 'dense\n' : ''}
  ${state ? state + '\n' : ''}
  ${icon !== '' ? 'icon={<i className=\'material-icons\'>' + icon + '</i>}\n' : ''}>
  ${label}
</Button>`;
};

export default ButtonCatalog;
