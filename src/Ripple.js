import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './styles/RipplePage.scss';

const RipplePage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<RippleHero />}
        title='Ripple'
        description=''
        designLink='https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction'
        docsLink='https://material.io/components/web/catalog/ripples/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple'
        demos={<RippleDemos />}
      />
    </div>
  );
}

class RippleHero extends Component {
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
        <button className='hero-button mdc-button' ref={this.initRipple}>
          Text
        </button>
        <button className='hero-button mdc-button mdc-button--raised' ref={this.initRipple}>
          Raised
        </button>
        <button className='hero-button mdc-button mdc-button--unelevated' ref={this.initRipple}>
          Unelevated
        </button>
        <button className='hero-button mdc-button mdc-button--stroked' ref={this.initRipple}>
          Stroked
        </button>
      </div>
    );
  }
}

class RippleDemos extends Component {
  ripples = [];
  initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderRippleVariant(title, variantClass) {
    return (
      <div>
        <h3>{title}</h3>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          Default
        </button>
        <button className={`demo-button mdc-button mdc-button--dense ${variantClass}`} ref={this.initRipple}>
          Dense
        </button>
        <button className={`demo-button mdc-button ${variantClass}`} ref={this.initRipple}>
          <i className='material-icons mdc-button__icon'>favorite</i>
          Icon
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderRippleVariant('Bounded Ripple')}
        {this.renderRippleVariant('Unbounded Ripple', <div className='ripple-demo-icon material-icons'>favorite</div> )}
        {this.renderRippleVariant('Theme Colors', <div><div className='ripple-demo-theme-primary'>Primary</div> <div className='ripple-demo-theme-secondary'>Secondary</div></div> )}
        {this.renderRippleVariant('Button Example', <div className='mdc-button ripple-demo-button'>button<div>)}
      </div>
    );
  }
}

export default RipplePage;
