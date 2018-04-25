import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCCheckbox} from '@material/checkbox/dist/mdc.checkbox';

import './styles/CheckboxPage.scss';

const CheckboxPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<CheckboxHero/>}
        title='Checkbox'
        description='Checkboxes allow the user to select multiple options from a set.'
        designLink='https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox'
        docsLink='https://material.io/components/web/catalog/input-controls/checkboxes/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox'
        demos={<CheckboxDemos/>}
      />
    </div>
  );
}

class CheckboxHero extends Component {
  constructor(props) {
    super(props);
    this.checkboxes = [];
    this.initCheckbox = checkboxEl => this.checkboxes.push(new MDCCheckbox(checkboxEl));
  }

  componentWillUnmount() {
    this.checkboxes.forEach(checkbox => checkbox.destroy());
  }

  render() {
    return (
      <div>
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
        </div>
      </div>
    );
  }
}

class CheckboxDemos extends Component {
  constructor(props) {
    super(props);
    this.checkboxes = [];
    this.initCheckbox = checkboxEl => this.checkboxes.push(new MDCCheckbox(checkboxEl));
  }

  componentWillUnmount() {
    this.checkboxes.forEach(checkbox => checkbox.destroy());
  }

  renderCheckboxVariant(title, {checked, indeterminate}) {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>{title}</h3>
        <div className='mdc-checkbox demo-checkbox' ref={this.initCheckbox}>
          <input type='checkbox'
                 className='mdc-checkbox__native-control'
                 defaultChecked={checked}
                 ref={input => input.indeterminate = indeterminate}/>
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
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderCheckboxVariant('Checked', {checked: true})}
        {this.renderCheckboxVariant('Indeterminate', {indeterminate: true})}
      </div>
    );
  }
}

export default CheckboxPage;
