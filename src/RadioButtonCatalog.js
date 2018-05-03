import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple';

import './styles/RadioButtonCatalog.scss';

const RadioButtonCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<RadioButtonHero/>}
      title='Radio Button'
      description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/guidelines/components/selection-controls.html#selection-controls-radio-button'
      docsLink='https://material.io/components/web/catalog/input-controls/radio-buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio'
      demos={<RadioButtonDemos/>}
    />
  );
}

class RadioButtonHero extends Component {

  ripples = [];
  initRipple = buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div>
        <div className='mdc-radio'>
          <input className='mdc-radio__native-control' type='radio' id='hero-radio-1' name='radios' defaultChecked />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'/>
            <div className='mdc-radio__inner-circle'/>
          </div>
        </div>
        <div className='mdc-radio'>
          <input className='mdc-radio__native-control' type='radio' id='hero-radio-2' name='radios' />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'/>
            <div className='mdc-radio__inner-circle'/>
          </div>
        </div>
      </div>
    );
  }
}

class RadioButtonDemos extends Component {

  setCount = 0;

  renderRadioButtonVariant(title) {
    this.setCount++;
    const name = `radio-set-${this.setCount}`;
    return (
      <div className='demo-example'>
        <h3 className='mdc-typography--subtitle2'>{title}</h3>
        <div className='mdc-form-field'>
          <div className='mdc-radio'>
            <input className='mdc-radio__native-control' type='radio' id='radio-1' name={name} defaultChecked />
            <div className='mdc-radio__background'>
              <div className='mdc-radio__outer-circle'/>
              <div className='mdc-radio__inner-circle'/>
            </div>
          </div>
          <label id='radio-1-label' className='radio-demo-label' htmlFor='radio-1'>Radio 1</label>
          <div className='mdc-radio'>
            <input className='mdc-radio__native-control' type='radio' id='radio-2' name={name} />
            <div className='mdc-radio__background'>
              <div className='mdc-radio__outer-circle'/>
              <div className='mdc-radio__inner-circle'/>
            </div>
          </div>
          <label id='radio-2-label' htmlFor='radio-2'>Radio 2</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderRadioButtonVariant('Radio Button')}
      </div>
    );
  }
}

export default RadioButtonCatalog;
