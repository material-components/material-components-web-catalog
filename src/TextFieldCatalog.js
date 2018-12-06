import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTextField} from '@material/textfield/index';
import classnames from 'classnames';

import './styles/TextFieldCatalog.scss';

const TextField = (props) => {
  const {
    textFieldId, outlined, textarea,
    dense, leading, trailing, helperText, className,
  } = props;
  const classes = classnames('mdc-text-field', 'text-field', className, {
    'mdc-text-field--outlined': outlined,
    'mdc-text-field--textarea': textarea,
    'mdc-text-field--dense': dense,
    'mdc-text-field--with-leading-icon': leading,
    'mdc-text-field--with-trailing-icon': trailing,
  });

  return (
    <div className='text-field-container'>
      <div className={classes} ref={textFieldEl => textFieldEl && new MDCTextField(textFieldEl)}>
        {leading && <i className='material-icons mdc-text-field__icon'>event</i>}
        {textarea ? <TextArea textFieldId={textFieldId}/> : <Input textFieldId={textFieldId}/>}
        {outlined || textarea ? null : <Label textFieldId={textFieldId} dense={dense}/>}
        {trailing && <i className='material-icons mdc-text-field__icon'>delete</i>}
        {outlined || textarea ? <Outline textFieldId={textFieldId}/> : <div className='mdc-line-ripple'></div>}
      </div>
      {helperText ? <HelperText /> : null}
    </div>
  );
}

const FullWidthTextField = ({textarea, textFieldId, helperText}) => {
  const classes = classnames('mdc-text-field', 'text-field', 'mdc-text-field--fullwidth', {
    'mdc-text-field--textarea': textarea,
  });
  return (
    <div className='text-field-container'>
      <div className={classes} ref={textFieldEl => textFieldEl && new MDCTextField(textFieldEl)}>
        {textarea ?
          <TextArea textFieldId={textFieldId}/> :
          <Input placeholder='Standard' textFieldId={textFieldId}/>}
        {textarea ? <Outline textFieldId={textFieldId}/> : null}
      </div>
      {helperText ? <HelperText /> : null}
    </div>
  );
}

const Outline = ({textFieldId}) => (
  <div className='mdc-notched-outline' key='outline'>
    <div className='mdc-notched-outline__leading'></div>
    <div className='mdc-notched-outline__notch'>
      <Label textFieldId={textFieldId}/>
    </div>
    <div className='mdc-notched-outline__trailing'></div>
  </div>
);

const Label = ({textFieldId}) => (
  <label className='mdc-floating-label' htmlFor={textFieldId}>
    Standard
  </label>
);

const Input = ({placeholder, textFieldId}) => (
  <input type='text'
    id={textFieldId}
    placeholder={placeholder}
    className='mdc-text-field__input' />
);

const TextArea = ({placeholder, textFieldId}) => (
  <textarea
    id={textFieldId}
    placeholder={placeholder}
    className='mdc-text-field__input' />
);

const HelperText = () => (
  <p className='mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg'
   id='pw-validation-msg'>
    Helper Text
  </p>
);

const TextFieldCatalog = () => (
  <ComponentCatalogPanel
    hero={<TextFieldHero />}
    title='Text Field'
    description='Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.'
    designLink='https://material.io/go/design-text-fields'
    docsLink='https://material.io/components/web/catalog/input-controls/text-field/'
    sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield'
    demos={<TextFieldDemos/>}
  />
);

export const TextFieldHero = () => {
  return (
      <TextField textFieldId='hero-text-field-id'/>
  )
};

class TextFieldDemos extends Component {
  renderFullWidthVariant(title, ...args) {
    const variants = {};
    args.forEach(arg => variants[arg] = true);
    const variantId = args.reduce((allArgs, arg) => `${allArgs}-${arg}`, 'fullwidth');
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className='text-field-row text-field-row-fullwidth'>
          <FullWidthTextField {...variants} helperText textFieldId={`text-field-${variantId}-helper`} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 className='mdc-typography--subtitle1'>Filled</h3>
          <div className='text-field-row'>
            <TextField helperText textFieldId='text-field-filled' />
            <TextField leading helperText textFieldId='text-field-filled-leading' />
            <TextField trailing helperText textFieldId='text-field-filled-trailing' />
          </div>
        </div>
        <div>
          <h3 className='mdc-typography--subtitle1'>Shaped Filled</h3>
          <div className='text-field-row'>
            <TextField helperText textFieldId='text-field-shape-one' className='demo-text-field-shaped' />
            <TextField leading helperText textFieldId='text-field-shape-two' className='demo-text-field-shaped' />
            <TextField trailing helperText textFieldId='text-field-shape-three' className='demo-text-field-shaped' />
          </div>
        </div>
        <div>
          <h3 className='mdc-typography--subtitle1'>Outlined</h3>
          <div className='text-field-row'>
            <TextField outlined helperText textFieldId='text-field-outlined' />
            <TextField outlined leading helperText textFieldId='text-field-outlined-leading' />
            <TextField outlined trailing helperText textFieldId='text-field-outlined-trailing' />
          </div>
        </div>
        <div>
          <h3 className='mdc-typography--subtitle1'>Shaped Outlined</h3>
          <div className='text-field-row'>
            <TextField outlined helperText textFieldId='text-field-shape-one' className='demo-text-field-outlined-shaped' />
            <TextField outlined leading helperText textFieldId='text-field-shape-two' className='demo-text-field-outlined-shaped' />
            <TextField outlined trailing helperText textFieldId='text-field-shape-three' className='demo-text-field-outlined-shaped' />
          </div>
        </div>
        <h3 className='mdc-typography--subtitle1'>Textarea</h3>
        <TextField textarea textFieldId='textarea' />
        {this.renderFullWidthVariant('Full Width')}
        {this.renderFullWidthVariant('Full Width Textarea', 'textarea')}
      </div>
    );
  }
}

export default TextFieldCatalog;
