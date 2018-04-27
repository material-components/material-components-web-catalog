import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';

import './styles/TextFieldPage.scss';

const getLabel = (disabled, dense) => {
  if (disabled) {
    return 'Disabled';
  } else if (dense) {
    return 'Dense';
  }
  return 'Standard';
}

const TextField = (props) => {
  const {
    textFieldId, box, outlined, fullwidth, textarea,
    disabled, dense, leading, trailing, helperText,
  } = props;
  const classes = classnames('mdc-text-field', 'text-field', {
    'mdc-text-field--box': box,
    'mdc-text-field--outlined': outlined,
    'mdc-text-field--fullwidth': fullwidth,
    'mdc-text-field--textarea': textarea,
    'mdc-text-field--disabled': disabled,
    'mdc-text-field--dense': dense,
    'mdc-text-field--with-leading-icon': leading,
    'mdc-text-field--with-trailing-icon': trailing,
  });

  const showPlaceholder = fullwidth && !textarea;
  const placeholder = showPlaceholder ? getLabel(disabled, dense) : '';


  return (
    <div className='text-field-container'>
      <div className={classes} ref={textFieldEl => new MDCTextField(textFieldEl)}>
        {leading && <i className='material-icons mdc-text-field__icon'>event</i>}
        {textarea ?
          <TextArea placeholder={placeholder} disabled={disabled} textFieldId={textFieldId}/> :
          <Input placeholder={placeholder} disabled={disabled} textFieldId={textFieldId}/>
        }
        {showPlaceholder ? null : <Label textFieldId={textFieldId} disabled={disabled} dense={dense}/>}
        {trailing && <i className='material-icons mdc-text-field__icon'>delete</i>}
        {outlined ? <Outline /> : <div className='mdc-line-ripple'></div>}
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

const Label = ({disabled, dense, textFieldId}) => (
  <label className='mdc-floating-label' htmlFor={textFieldId}>
    {getLabel(disabled, dense)}
  </label>
);

const Input = ({placeholder, textFieldId, disabled}) => (
  <input type='text'
    id={textFieldId}
    placeholder={placeholder}
    disabled={disabled}
    className='mdc-text-field__input' />
);

const TextArea = ({placeholder, textFieldId, disabled}) => (
  <textarea
    id={textFieldId}
    placeholder={placeholder}
    disabled={disabled}
    className='mdc-text-field__input' />
);

const HelperText = () => (
  <p className='mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg'
   id='pw-validation-msg'>
    Helper Text
  </p>
);

const TextFieldPage = () => (
  <div>
    <HeaderBar />
    <ComponentPage
      hero={<TextField textFieldId='hero-text-field-id'/>}
      title='Text Field'
      description='Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.'
      designLink='https://material.io/guidelines/components/text-fields.html'
      docsLink='https://material.io/components/web/catalog/input-controls/text-field/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield'
      demos={<TextFieldDemos/>}
    />
  </div>
);


class TextFieldDemos extends Component {
  renderVariant(title, ...args) {
    const variants = {};
    args.forEach(arg => variants[arg] = true);
    const variantId = args.reduce((allArgs, arg) => `${allArgs}-${arg}`, '');
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>{title}</h3>
        <div className={classnames('text-field-row', {
          'text-field-row-fullwidth': variantId.includes('fullwidth'),
        })}>
          <TextField {...variants} textFieldId={`text-field-${variantId}`} />
          <TextField {...variants} dense textFieldId={`text-field-${variantId}-dense`} />
          <TextField {...variants} disabled textFieldId={`text-field-${variantId}-disabled`} />
          <TextField {...variants} helperText textFieldId={`text-field-${variantId}-helper`} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderVariant('Standard')}
        {this.renderVariant('Box', 'box')}
        {this.renderVariant('Outlined', 'outlined')}
        {this.renderVariant('Box With Leading Icon', 'leading', 'box')}
        {this.renderVariant('Box With Trailing Icon', 'trailing', 'box')}
        {this.renderVariant('Outlined With Leading Icon', 'leading', 'outlined')}
        {this.renderVariant('Outlined With Trailing Icon', 'trailing', 'outlined')}
        {this.renderVariant('Textarea', 'textarea')}
        {this.renderVariant('FullWidth', 'fullwidth')}
        {this.renderVariant('FullWidth Textarea', 'textarea', 'fullwidth')}
      </div>
    );
  }
}

export default TextFieldPage;
