import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple/index';

import './styles/ButtonCatalog.scss';

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
      config={ButtonConfig}
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
    this.initRipple =
        buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
        <div>
          <button className='hero-button mdc-button' ref={this.initRipple}>
            Text
          </button>
          <button className='hero-button mdc-button mdc-button--raised'
                  ref={this.initRipple}>
            Raised
          </button>
          <button className='hero-button mdc-button mdc-button--unelevated'
                  ref={this.initRipple}>
            Unelevated
          </button>
          <button className='hero-button mdc-button mdc-button--outlined'
                  ref={this.initRipple}>
            Outlined
          </button>
        </div>
    );
  }

}

export class ButtonHero extends Component {
  type = {
    raised: 'mdc-button--raised',
    unelevated: 'mdc-button--unelevated',
    outlined: 'mdc-button--outlined',
  };

  label = 'Button Text';

  constructor(props) {
    super(props);
    this.ripple = null;
    this.buttonRef = React.createRef();
  }

  componentWillUnmount() {
    if (this.ripple) this.ripple.destroy();
  }

  componentDidUpdate() {
    if (this.ripple) this.ripple.destroy();
    this.ripple = new MDCRipple(this.buttonRef.current);
  }

  render() {
    if (this.props.config) {
      this.label = this.props.config.options[2].value;
      this.selectedType = this.props.config.options[1].value;
    }

    return (
        <div>
          <button className={`hero-button mdc-button ${this.selectedType ? this.type[this.selectedType] : ''}`} ref={this.buttonRef}>
            {this.label}
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

const ButtonConfig = {
  afterUpdate: () => {
    // Function that will be executed after the update. Make any adjustments
    // such as disabling a field, and return the object.
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



export default ButtonCatalog;
