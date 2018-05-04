import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

import './styles/SwitchCatalog.scss';

const SwitchCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<SwitchHero/>}
      title='Switch'
      description='Switches communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/go/design-switches'
      docsLink='https://material.io/components/web/catalog/input-controls/switches/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch'
      demos={<SwitchDemos/>}
    />
  );
};

class SwitchHero extends Component {
  state = {
    isChecked: true,
  };

  handleChecked = (event) => {
    this.setState({
      isChecked: event.target.checked,
    });
  };

  render() {
    return (
        <div>
          <div className='mdc-switch'>
            <input type='checkbox' id='hero-switch' className='mdc-switch__native-control' role='switch'
                   aria-checked='false'
                   checked={this.state.isChecked}
                   onChange={this.handleChecked}/>
            <div className='mdc-switch__background'>
              <div className='mdc-switch__knob'/>
            </div>
          </div>
          <label htmlFor='hero-switch' className='mdc-switch-label'>off/on</label>
        </div>
    );
  }
}

class SwitchDemos extends Component {
  renderSwitchVariant(title, variant) {
    return (
        <div>
          <h3 className='mdc-typography--subtitle2'>{title}</h3>
          <div className='switch-demo'>
          <div className='mdc-switch'>
            <input type='checkbox' id={`${title}-switch`} className='mdc-switch__native-control' role='switch'
                   aria-checked='false' disabled={variant === 'disabled'}/>
            <div className='mdc-switch__background'>
              <div className='mdc-switch__knob'/>
            </div>
          </div>
          <label htmlFor={`${title}-switch`} className='mdc-switch-label'>off/on</label>
          </div>
        </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSwitchVariant('Switch')}
      </div>
    );
  }
}

export default SwitchCatalog;
