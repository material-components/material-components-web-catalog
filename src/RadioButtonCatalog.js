import React, { Component } from 'react';
import classnames from 'classnames';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {withFormField} from './FormField';
import {MDCRadio} from '@material/radio/index';

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

export const RadioButtonHero = () => {
  return (
      <div>
        <Radio className='demo-radio' name='hero-radio-set' id='hero-radio-1' defaultChecked />
        <Radio className='demo-radio' name='hero-radio-set' id='hero-radio-2' />
      </div>
  );
};

const RadioButtonDemos = () => {
  return (
    <div>
      <h3 className='mdc-typography--subtitle1'>Radio Buttons</h3>
      <RadioFormField className='demo-radio-form-field' name='demo-radio-set' label='Radio 1' defaultChecked />
      <RadioFormField className='demo-radio-form-field' name='demo-radio-set' label='Radio 2' />
    </div>
  );
};

export class Radio extends Component {
  initRadio = (radioEl) => this.radio = radioEl && new MDCRadio(radioEl);

  onChange = () => this.props.onChange && this.props.onChange();

  componentWillUnmount() {
    this.radio.destroy();
  }

  componentDidMount() {
    if (!this.props.handleInit || !this.radio) return;
    this.props.handleInit(this.radio);
  }

  render() {
    const classes = classnames('mdc-radio', this.props.className);

    return (
      <div className={classes} ref={this.initRadio}>
        <input className='mdc-radio__native-control'
                type='radio'
                id={this.props.id}
                name={this.props.name}
                defaultChecked={this.props.defaultChecked}
                onChange={this.onChange}/>
        <div className='mdc-radio__background'>
          <div className='mdc-radio__outer-circle'/>
          <div className='mdc-radio__inner-circle'/>
        </div>
        <div className='mdc-radio__ripple'></div>
      </div>
    )
  }
}

const RadioFormField = withFormField(Radio);

export default RadioButtonCatalog;
