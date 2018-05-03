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
        description='Ripples are visual representations used to communicate the status of a component or interactive element.'
        designLink='https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction'
        docsLink='https://material.io/components/web/catalog/ripples/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple'
        demos={<RippleDemos />}
      />
    </div>
  );
}

class RippleHero extends Component {
  ripples = [];
  initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
        <div className='ripple-demo-box mdc-ripple-surface' ref={this.initRipple}>
          Click here!
        </div>
    );
  }
}

class RippleDemos extends Component {
  ripples = [];

  initRipple = buttonEl => {
    const ripple = new MDCRipple(buttonEl);

    if(buttonEl.classList.contains('mdc-ripple-radius-unbounded')) {
      ripple.unbounded = true;
    }

    this.ripples.push(ripple);
  };

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  renderRippleVariant(title, variant, text) {
    return (
        <div>
          <div className='ripple-demos'>
            <div className='ripple-demo-col'>
              <h3>{title}</h3>
              <div tabIndex='0' className={variant + ' mdc-ripple-surface'} ref={this.initRipple}>
                {text}
              </div>
            </div>
          </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderRippleVariant('Bounded Ripple', 'ripple-demo-box', 'Interact with me!')}
        {this.renderRippleVariant('Unbounded Ripple', 'ripple-demo-icon material-icons mdc-ripple-radius-unbounded', 'favorite')}
        {this.renderRippleVariant('Theme Colors Primary', 'ripple-demo-box mdc-ripple-surface--primary', 'Primary')}
        {this.renderRippleVariant('Theme Colors Secondary', 'ripple-demo-box mdc-ripple-surface--accent', 'Secondary')}
      </div>
    );
  }
}

export default RipplePage;
