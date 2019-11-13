import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCCheckbox} from '@material/checkbox/index';

import './styles/CheckboxCatalog.scss';

const CheckboxCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<CheckboxHero/>}
      title='Checkbox'
      description='Checkboxes allow the user to select multiple options from a set.'
      designLink='https://material.io/go/design-checkboxes'
      docsLink='https://material.io/components/web/catalog/input-controls/checkboxes/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox'
      demos={<CheckboxDemos/>}
    />
  );
}

export class CheckboxHero extends Component {
  constructor(props) {
    super(props);
    this.checkboxes = [];
    this.initCheckbox = checkboxEl => checkboxEl && this.checkboxes.push(new MDCCheckbox(checkboxEl));
  }

  componentWillUnmount() {
    this.checkboxes.forEach(checkbox => checkbox.destroy());
  }

  render() {
    return (
      <div>
        <div className='mdc-checkbox mdc-checkbox--selected demo-checkbox' ref={this.initCheckbox}>
          <input type='checkbox'
                 defaultChecked={true}
                 className='mdc-checkbox__native-control'/>
          <div className='mdc-checkbox__background'>
            <svg className='mdc-checkbox__checkmark'
                 viewBox='0 0 24 24'>
              <path className='mdc-checkbox__checkmark-path'
                    fill='none'
                    stroke='white'
                    d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
            </svg>
            <div className='mdc-checkbox__mixedmark'></div>
          </div>
          <div className='mdc-checkbox__ripple'></div>
        </div>

        <div className='mdc-checkbox demo-checkbox' ref={this.initCheckbox}>
          <input type='checkbox'
                 className='mdc-checkbox__native-control'/>
          <div className='mdc-checkbox__background'>
            <svg className='mdc-checkbox__checkmark'
                 viewBox='0 0 24 24'>
              <path className='mdc-checkbox__checkmark-path'
                    fill='none'
                    stroke='white'
                    d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
            </svg>
            <div className='mdc-checkbox__mixedmark'></div>
          </div>
          <div className='mdc-checkbox__ripple'></div>
        </div>
      </div>
    );
  }
}

class CheckboxDemos extends Component {
  constructor(props) {
    super(props);
    this.checkboxes = [];
    this.initCheckbox = checkboxEl => checkboxEl && this.checkboxes.push(new MDCCheckbox(checkboxEl));
  }

  componentWillUnmount() {
    this.checkboxes.forEach(checkbox => checkbox.destroy());
  }

  renderCheckboxVariant(title, inputRefCallback) {
    let classes = '';
    if (title !== 'Unchecked') {
      classes = 'mdc-checkbox--selected';
    }

    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-checkbox ${classes} demo-checkbox`} ref={this.initCheckbox}>
          <input type='checkbox'
                 className='mdc-checkbox__native-control'
                 ref={inputRefCallback}/>
          <div className='mdc-checkbox__background'>
            <svg className='mdc-checkbox__checkmark'
                 viewBox='0 0 24 24'>
              <path className='mdc-checkbox__checkmark-path'
                    fill='none'
                    stroke='white'
                    d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
            </svg>
            <div className='mdc-checkbox__mixedmark'></div>
          </div>
          <div className='mdc-checkbox__ripple'></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderCheckboxVariant('Unchecked')}
        {this.renderCheckboxVariant('Indeterminate', inputEl => {
          if (!inputEl) return;
          inputEl.indeterminate = true;
        })}
        {this.renderCheckboxVariant('Checked', inputEl => {
          if (!inputEl) return;
          inputEl.checked = true;
        })}
      </div>
    );
  }
}

export default CheckboxCatalog;
