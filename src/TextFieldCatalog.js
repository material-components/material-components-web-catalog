import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTextField} from '@material/textfield/index';
import classnames from 'classnames';
import ReactGA from 'react-ga';

import './styles/TextFieldCatalog.scss';
import {gtagCategory, gtagTextFieldAction} from './constants';
import { throws } from 'assert';

export const TextField = (props) => {
  const {
    textFieldId, outlined, textarea,
    dense, leading, trailing, helperText, className, onClick
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
        {textarea ? <TextArea textFieldId={textFieldId} onClick={onClick} /> : <Input textFieldId={textFieldId} onClick={onClick}/>}
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

const Input = ({placeholder, textFieldId, onClick}) => (
  <input type='text'
    id={textFieldId}
    placeholder={placeholder}
    className='mdc-text-field__input'
    onClick={onClick} />
);

const TextArea = ({placeholder, textFieldId, onClick}) => (
  <textarea
    id={textFieldId}
    placeholder={placeholder}
    className='mdc-text-field__input'
    onClick={onClick} />
);

const HelperText = () => (
  <p className='mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg'
   id='pw-validation-msg'>
    Helper Text
  </p>
);

const TextFieldCatalog = (props) => (
  <ComponentCatalogPanel
    hero={<TextFieldHero />}
    title='Text Field'
    description='Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.'
    designLink='https://material.io/go/design-text-fields'
    docsLink='https://material.io/components/web/catalog/input-controls/text-field/'
    sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield'
    demos={<TextFieldDemos/>}
    initialConfig={TextFieldConfig}
    {...props}
  />
);

this.clickEvent = (label) => () => ReactGA.event({category: gtagCategory, action: gtagTextFieldAction, label: label});

// Keep this until the material io experiment is complete.
export const TextFieldHeroLegacy = () => {
  return (
      <div className={'hero-text-field-container'}>
        <TextField textFieldId='hero-text-field-id' onClick={this.clickEvent('Filled')}/>
        <TextField outlined textFieldId='hero-text-field-id--outlined' onClick={this.clickEvent('Outlined')}/>
      </div>
  )
};

class TextFieldHero extends Component {
  textField;
  tfEl;
  initRef = (el) => {
    if (el) {
      this.tfEl = el;
    }
  }

  componentDidUpdate() {
    if (this.textField) {
      this.textField.destroy();
      this.textField = null;
    }
    if (this.tfEl) {
      this.textField = new MDCTextField(this.tfEl);
    }
  }

  render() {
    let label;
    let leadingIcon;
    let trailingIcon;
    let type;

    if (this.props.config) {
      type = this.props.config.options[1].value;
      label = this.props.config.options[2].value;
      leadingIcon = this.props.config.options[3].value;
      trailingIcon = this.props.config.options[4].value;
    }

    return (
    <div className={classnames('mdc-text-field', {
      'mdc-text-field--outlined': type === 'outlined',
      'mdc-text-field--with-leading-icon': leadingIcon !== '',
      'mdc-text-field--with-trailing-icon': trailingIcon !== '',

    })} ref={this.initRef}>
      {leadingIcon !== '' ? (<i className='material-icons mdc-text-field__icon'>{leadingIcon}</i>) : ''}
      {trailingIcon !== '' ? (<i className='material-icons mdc-text-field__icon'>{trailingIcon}</i>) : ''}
      <input className='mdc-text-field__input'></input>
      {type === 'outlined' ? (
      <div className='mdc-notched-outline'>
          <div className='mdc-notched-outline__leading'></div>
          <div className='mdc-notched-outline__notch'>
            <label className='mdc-floating-label'>{label}</label>
            </div>
          <div className='mdc-notched-outline__trailing'></div>
      </div>) : (
      <React.Fragment>
        <div className='mdc-line-ripple'></div>
        <label className='mdc-floating-label'>{label}</label>
      </React.Fragment>)}
    </div>
    )
  }
}

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


const TextFieldConfig = {
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
      value: 'filled', // default select first option
      options: [
        {
          label: 'Filled',
          value: 'filled',
        },
        {
          label: 'Outlined',
          value: 'outlined',
        },
      ],
    },
    {
      type: 'textfield',
      name: 'Label',
      label: 'Label',
      urlParam: 'label',
      value: 'Button Text'
    },
    {
      type: 'textfield',
      name: 'Leading Icon',
      label: 'Leading Icon',
      urlParam: 'leadingIcon',
      value: ''
    },
    {
      type: 'textfield',
      name: 'Trailing Icon',
      label: 'Trailing Icon',
      urlParam: 'trailingIcon',
      value: ''
    }
  ],
};

export const TextFieldReactTemplate = (config) => {
  const label = config.options[2].value;
  const type = config.options[1].value;
  const leadingIcon = config.options[3].value;
  const trailingIcon = config.options[4].value;
  // TODO: Wire these up when the Config is complete
  const dense = '';
  const state = '';

  return `<TextField
  ${type ? type + '\n' : ''}
  ${dense ? 'dense\n' : ''}
  ${state ? state + '\n' : ''}
  ${state ? `label='${label}'\n` : ''}
  ${leadingIcon !== '' ? `leadingIcon={<i className='material-icons'>${leadingIcon}</i>}\n` : ''}>
  ${trailingIcon !== '' ? `leadingIcon={<i className='material-icons'>${trailingIcon}</i>}\n` : ''}>
</Button>`;
};


export default TextFieldCatalog;
