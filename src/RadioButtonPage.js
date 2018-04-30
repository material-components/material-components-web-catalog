import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './styles/RadioButtonPage.scss';

const RadioButtonPage = () => {
  return (
      <div>
        <HeaderBar />
        <ComponentPage
            hero={<RadioButtonHero/>}
            title='Radio Button'
            description='Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
            designLink='https://material.io/guidelines/components/buttons.html'
            docsLink='https://material.io/components/web/catalog/buttons/'
            sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
            demos={<RadioButtonDemos/>}
        />
      </div>
  );
}

class RadioButtonHero extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
    this.initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
        <div>
          <div className='mdc-radio'>
            <input className='mdc-radio__native-control' type='radio' id='hero-radio-1' name='radios' defaultChecked={true} />
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
  constructor(props) {
    super(props);
    this.setCount = 0;
  }

  renderRadioButtonVariant(title) {
    this.setCount++;
    let radioCount = 0;
    return (
        <div className='demo-example'>
          <h3 className='mdc-typography--subtitle2'>{title}</h3>
          <div className='mdc-form-field'>
            <div className='mdc-radio'>
              <input className='mdc-radio__native-control' type='radio' id={'radio-' + radioCount} name={'radio-set-' + this.setCount} defaultChecked={true} />
              <div className='mdc-radio__background'>
                <div className='mdc-radio__outer-circle'/>
                <div className='mdc-radio__inner-circle'/>
              </div>
            </div>
            <label id='radio-1-label' htmlFor='radio-1'>Radio 1</label>
            <div className='mdc-radio'>
              <input className='mdc-radio__native-control' type='radio' id={'radio-' + radioCount} name={'radio-set-' + this.setCount} />
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

export default RadioButtonPage;
