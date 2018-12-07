import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCIconButtonToggle} from '@material/icon-button/index';
import {MDCRipple} from '@material/ripple/index';

import './styles/IconButtonCatalog.scss';

const IconButtonCatalog = () => {
  const description = 'Icons are appropriate for buttons that allow a user to take actions or ' +
                      'make a selection, such as adding or removing a star to an item. ';
  return (
    <ComponentCatalogPanel
      hero={<IconButtonHero/>}
      title='Icon Button'
      description={description}
      designLink='https://material.io/design/components/buttons.html#toggle-button'
      docsLink='https://material.io/components/web/catalog/buttons/icon-buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button'
      demos={<IconButtonDemo/>}
    />
  );
};

export const IconButtonHero = () => {
    return (
        <IconButtonToggle />
    );
};

class IconButtonToggle extends Component {
  initIconButtonToggle = (ele) => {
    if(!ele) return;
    this.iconButtonToggle = MDCIconButtonToggle.attachTo(ele);
  };

  componentWillUnmount() {
    this.iconButtonToggle.destroy();
  }

  render() {
    return (
      <div>
        <button className='mdc-icon-button'
          aria-pressed='false'
          aria-label='Add to favorites'
          ref={this.initIconButtonToggle}>
          <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
          <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
        </button>
      </div>
    );
  }
}

class IconButton extends Component {
  initRipple = (ele) => {
    if(!ele) return;
    this.ripple = MDCRipple.attachTo(ele);
    this.ripple.unbounded = true;
  };

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
        <div>
          <button className='mdc-icon-button material-icons'
            aria-label='Add to favorites'
            ref={this.initRipple}>wifi</button>
        </div>
    )
  }
}

const IconButtonDemo = () => (
    <div>
      <h3 className='mdc-typography--subtitle1'>Icon Button</h3>
      <IconButton />

      <h3 className='mdc-typography--subtitle1'>Icon Toggle Button</h3>
      <IconButtonToggle />
    </div>
)

export default IconButtonCatalog;
