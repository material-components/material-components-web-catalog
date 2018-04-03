import React, { Component } from 'react';
import HeaderBar from './HeaderBar.js';
import Hero from './Hero.js';

import {MDCRipple} from '@material/ripple';

class ButtonHero extends Component {
  render() {
    return (
      <div>
        <button className='mdc-button'>
          Text
        </button>
        <button className='mdc-button mdc-button--raised'>
          Raised
        </button>
        <button className='mdc-button mdc-button--unelevated'>
          Unelevated
        </button>
        <button className='mdc-button mdc-button--stroked'>
          Stroked
        </button>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <HeaderBar title='Button'/>
        <Hero children={<ButtonHero/>}/>
      </div>
    );
  }
}

export default Button;
