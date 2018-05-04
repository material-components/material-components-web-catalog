import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

import './styles/RadioButtonCatalog.scss';

const RadioButtonCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<RadioButtonHero/>}
      title='Radio Button'
      description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/go/design-radio-buttons'
      docsLink='https://material.io/components/web/catalog/input-controls/radio-buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio'
      demos={<RadioButtonDemos/>}
    />
  );
}

class RadioButtonHero extends Component {
  radios = [];
  initRadio = radioEl => radioEl && this.radios.push(new MDCRadio(radioEl));

  componentWillUnmount() {
    this.radios.forEach(radio => radio.destroy());
  }

  render() {
    return (
      <div>
        <div className='mdc-radio' ref={this.initRadio}>
          <input className='mdc-radio__native-control' type='radio' id='hero-radio-1' name='radios' defaultChecked />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'/>
            <div className='mdc-radio__inner-circle'/>
          </div>
        </div>
        <div className='mdc-radio' ref={this.initRadio}>
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
  formFields = [];
  radios = [];
  initFormField = formFieldEl => formFieldEl && this.formFields.push(new MDCFormField(formFieldEl));
  initRadio = radioEl => radioEl && this.radios.push(new MDCRadio(radioEl));

  componentDidMount() {
    // This assumes every radio button in the demos is wrapped in a form field.
    for (var i = 0; i < this.formFields.length; i++) {
      this.formFields[i].input = this.radios[i];
    }
  }

  componentWillUnmount() {
    this.formFields.forEach(formField => formField.destroy());
    this.radios.forEach(radio => radio.destroy());
  }

  renderRadioButtonSet(title) {
    this.setCount++;
    const name = `radio-set-${this.setCount}`;
    return (
      <div className='demo-example'>
        <h3 className='mdc-typography--subtitle2'>{title}</h3>
        <div className='mdc-form-field' ref={this.initFormField}>
          <div className='mdc-radio' ref={this.initRadio}>
            <input className='mdc-radio__native-control' type='radio' id='radio-1' name={name} defaultChecked />
            <div className='mdc-radio__background'>
              <div className='mdc-radio__outer-circle'/>
              <div className='mdc-radio__inner-circle'/>
            </div>
          </div>
          <label id='radio-1-label' className='radio-demo-label' htmlFor='radio-1'>Radio 1</label>
        </div>
        <div className='mdc-form-field' ref={this.initFormField}>
          <div className='mdc-radio' ref={this.initRadio}>
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
        {this.renderRadioButtonSet('Radio Button')}
      </div>
    );
  }
}

export default RadioButtonCatalog;
