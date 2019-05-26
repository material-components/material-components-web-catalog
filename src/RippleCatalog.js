import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple/index';

import './styles/RippleCatalog.scss';

const RippleCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<RippleHero />}
      title='Ripple'
      description='Ripples are visual representations used to communicate the status of a component or interactive element.'
      designLink='https://material.io/go/design-states'
      docsLink='https://material.io/components/web/catalog/ripples/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple'
      demos={<RippleDemos />}
    />
  );
};

export class RippleHero extends Component {
  ripples = [];
  initRipple = buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));

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
    if (!buttonEl) return;
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
              <h3 className='mdc-typography--subtitle1'>{title}</h3>
              <div tabIndex='0' className={variant} ref={this.initRipple}>
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
        {this.renderRippleVariant('Bounded Ripple', 'ripple-demo-box mdc-ripple-surface', 'Interact with me!')}
        {this.renderRippleVariant('Unbounded Ripple', 'ripple-demo-icon mdc-ripple-surface material-icons mdc-ripple-radius-unbounded', 'favorite')}
        {this.renderRippleVariant('Theme Colors: Primary', 'ripple-demo-box mdc-ripple-surface ripple-demo-box--primary', 'Primary')}
        {this.renderRippleVariant('Theme Colors: Secondary', 'ripple-demo-box mdc-ripple-surface ripple-demo-box--secondary', 'Secondary')}
      </div>
    );
  }
}

export default RippleCatalog;
