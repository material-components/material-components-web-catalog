import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';

import './styles/TextFieldCatalog.scss';

const getLabel = (dense) => {
  if (dense) {
    return 'Dense';
  }
  return 'Standard';
}

const TextField = (props) => {
  const {
    textFieldId, outlined, textarea,
    dense, leading, trailing, helperText,
  } = props;
  const classes = classnames('mdc-text-field', 'text-field', {
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
        <Label textFieldId={textFieldId} dense={dense}/>
        {trailing && <i className='material-icons mdc-text-field__icon'>delete</i>}
        {outlined ? <Outline /> : <div className='mdc-line-ripple'></div>}
      </div>
      {helperText ? <HelperText /> : null}
    </div>
  );
}

const FullWidthTextField = ({dense, textarea, textFieldId, helperText}) => {
  const classes = classnames('mdc-text-field', 'text-field', 'mdc-text-field--fullwidth', {
    'mdc-text-field--dense': dense,
    'mdc-text-field--textarea': textarea,
  });
  return (
    <div className='text-field-container'>
      <div className={classes} ref={textFieldEl => textFieldEl && new MDCTextField(textFieldEl)}>
        {textarea ?
          <TextArea textFieldId={textFieldId}/> :
          <Input placeholder={getLabel(dense)} textFieldId={textFieldId}/>}
        {textarea ? <Label textFieldId={textFieldId} dense={dense}/> : null}
      </div>
      {helperText ? <HelperText /> : null}
    </div>
  );
}

const Outline = () => [
  <div className='mdc-notched-outline' key='outline'>
    <svg>
      <path className='mdc-notched-outline__path'/>
    </svg>
  </div>,
  <div className='mdc-notched-outline__idle' key='outline-idle'></div>
];

const Label = ({dense, textFieldId}) => (
  <label className='mdc-floating-label' htmlFor={textFieldId}>
    {getLabel(dense)}
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
    hero={<TextField textFieldId='hero-text-field-id'/>}
    title='Text Field'
    description='Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.'
    designLink='https://material.io/go/design-text-fields'
    docsLink='https://material.io/components/web/catalog/input-controls/text-field/'
    sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield'
    demos={<TextFieldDemos/>}
  />
);


class TextFieldDemos extends Component {
  renderVariant(title, ...args) {
    const variants = {};
    args.forEach(arg => variants[arg] = true);
    const variantId = args.reduce((allArgs, arg) => `${allArgs}-${arg}`, '');
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className='text-field-row'>
          <TextField {...variants} textFieldId={`text-field-${variantId}`} />
          <TextField {...variants} dense textFieldId={`text-field-${variantId}-dense`} />
          <TextField {...variants} helperText textFieldId={`text-field-${variantId}-helper`} />
        </div>
      </div>
    );
  }

  renderFullWidthVariant(title, ...args) {
    const variants = {};
    args.forEach(arg => variants[arg] = true);
    const variantId = args.reduce((allArgs, arg) => `${allArgs}-${arg}`, 'fullwidth');
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className='text-field-row text-field-row-fullwidth'>
          <FullWidthTextField {...variants} textFieldId={`text-field-${variantId}`} />
          <FullWidthTextField {...variants} dense textFieldId={`text-field-${variantId}-dense`} />
          <FullWidthTextField {...variants} helperText textFieldId={`text-field-${variantId}-helper`} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderVariant('Standard')}
        {this.renderVariant('Standard With Leading Icon', 'leading')}
        {this.renderVariant('Standard With Trailing Icon', 'trailing')}
        {this.renderVariant('Outlined', 'outlined')}
        {this.renderVariant('Outlined With Leading Icon', 'leading', 'outlined')}
        {this.renderVariant('Outlined With Trailing Icon', 'trailing', 'outlined')}
        {this.renderVariant('Textarea', 'textarea')}
        {this.renderFullWidthVariant('Full Width')}
        {this.renderFullWidthVariant('Full Width Textarea', 'textarea')}
      </div>
    );
  }
}

export default TextFieldCatalog;
