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

const RadioButtonHero = () => {
  return (
    <div>
      <Radio name='hero-radio-set' id='hero-radio-1' defaultChecked />
      <Radio name='hero-radio-set' id='hero-radio-2' />
    </div>
  );
}

const RadioButtonDemos = () => {
  return (
    <div>
      <h3 className='mdc-typography--subtitle2'>Radio Buttons</h3>
      <FormFieldRadio name='demo-radio-set' id='radio-1' label='Radio 1' defaultChecked />
      <FormFieldRadio name='demo-radio-set' id='radio-2' label='Radio 2' />
    </div>
  );
}

class FormFieldRadio extends Component {
  componentDidMount() {
    if (!this.formField || !this.radio) return;
    this.formField.input = this.radio;
  }

  componentWillUnmount() {
    this.formField && this.formField.destroy();
    this.radio && this.radio.destroy();
  }

  render() {
    return(
      <div className='demo-radio-form-field mdc-form-field' ref={el => this.formField = el && new MDCFormField(el)}>
        <div className='mdc-radio' ref={el => this.radio = el && new MDCRadio(el)}>
          <input className='mdc-radio__native-control'
                 type='radio'
                 id={this.props.id}
                 name={this.props.name}
                 defaultChecked={this.props.defaultChecked} />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'/>
            <div className='mdc-radio__inner-circle'/>
          </div>
        </div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

class Radio extends Component {
  componentWillUnmount() {
    this.radio && this.radio.destroy();
  }

  render() {
    return(
      <div className='demo-radio mdc-radio' ref={el => this.radio = el && new MDCRadio(el)}>
        <input className='mdc-radio__native-control'
                type='radio'
                id={this.props.id}
                name={this.props.name}
                defaultChecked={this.props.defaultChecked} />
        <div className='mdc-radio__background'>
          <div className='mdc-radio__outer-circle'/>
          <div className='mdc-radio__inner-circle'/>
        </div>
      </div>
    );
  }
}

export default RadioButtonCatalog;
