import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import classnames from 'classnames';
import {MDCSwitch} from '@material/switch';

import './styles/SwitchCatalog.scss';

const SwitchCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<SwitchHero/>}
      title='Switch'
      description='Switches communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
      designLink='https://material.io/go/design-switches'
      docsLink='https://material.io/components/web/catalog/input-controls/switches/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch'
      demos={<SwitchDemos/>}
      {...props}
    />
  );
};

class Switch extends Component {
  initSwitch = (el) => {
    if (!el) return;
    this.switchControl = new MDCSwitch(el);
  };

  componentWillUnmount() {
    this.switchControl && this.switchControl.destroy();
  }

  render() {
    const classes = classnames('mdc-switch', {
      'mdc-switch--disabled': this.props.disabled,
    });

    return (
      <span>
        <div className={classes} ref={this.initSwitch}>
          <div className='mdc-switch__track'></div>
          <div className='mdc-switch__thumb-underlay'>
            <div className='mdc-switch__thumb'>
                <input type='checkbox' id={this.props.inputId} className='mdc-switch__native-control' role='switch'
                       defaultChecked={this.props.defaultChecked} disabled={this.props.disabled} />
            </div>
          </div>
        </div>
        <label htmlFor={this.props.inputId}>{this.props.label}</label>
      </span>
    );
  }
}

class SwitchHero extends Component {
  render() {
    return (
      <Switch inputId='hero-switch' label='off/on' defaultChecked />
    );
  }
}

class SwitchDemos extends Component {
  renderSwitchVariant(title, variant) {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className='switch-demo'>
          <Switch inputId={`${title}-switch`} label='off/on' disabled={variant === 'disabled'} />
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
