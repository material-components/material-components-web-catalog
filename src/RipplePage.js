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
  ripples = [];
  initRipple = buttonEl => this.ripples.push(new MDCRipple(buttonEl));

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div className='material-surface' ref={this.initRipple}>
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

  renderRippleVariant(title, variant, text) {
    return (
        <div>
          <div className='ripple-demos'>
            <div>
              <h3>{title}</h3>
              <div className={variant} ref={this.initRipple}>
                {text}
              </div>
            </div>
            <div>
              <h3>{title} - CSS Only</h3>
              <div className={variant}>
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
        {this.renderRippleVariant('Bounded Ripple', 'ripple-demo-bounded mdc-ripple-surface', 'Interact with me!')}
        {this.renderRippleVariant('Unbounded Ripple', 'ripple-demo-icon material-icons', 'favorite')}
        {this.renderRippleVariant('Theme Colors Primary', 'ripple-demo-theme-primary', 'Primary')}
        {this.renderRippleVariant('Theme Colors Secondary', 'ripple-demo-theme-secondary', 'Secondary')}
        {this.renderRippleVariant('Button Example', 'mdc-button material-icons ripple-demo-button', 'button')}
      </div>
    );
  }
}

export default RipplePage;
