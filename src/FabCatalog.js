import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import classnames from 'classnames';
import {MDCRipple} from '@material/ripple/index';

import './styles/FabCatalog.scss';

class Fab extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const {
      className,
      children,
      ariaLabel,
      textLabel,
      mini,
      extended,
    } = this.props;
    const classes = classnames('mdc-fab', className, {
      'mdc-fab--mini': mini,
      'mdc-fab--extended': extended,
    });

    return (
      <button
        className={classes}
        aria-label={ariaLabel || textLabel}
        ref={fabEl => {
          if(fabEl) { this.ripple = new MDCRipple(fabEl); }
        }}
      >
        <div className='mdc-fab__ripple'></div>
        {children}
      </button>
    );
  }
}

const FabDemos = () => (
  <div>
    <h3 className='mdc-typography--subtitle1'>Standard Floating Action Button</h3>
    <Fab ariaLabel='Favorite'>
      <i className='mdc-fab__icon material-icons'>favorite_border</i>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Mini Floating Action Button</h3>
    <Fab mini ariaLabel='Favorite'>
    <i className='mdc-fab__icon material-icons'>favorite_border</i>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Extended FAB</h3>
    <Fab extended textLabel='Create'>
    <i className='mdc-fab__icon material-icons'>add</i>
      <span className='mdc-fab__label'>Create</span>
    </Fab>


    <h3 className='mdc-typography--subtitle1'>Extended FAB (Text label followed by icon)</h3>
    <Fab extended textLabel='Create'>
      <span className='mdc-fab__label'>Create</span>
      <i className='mdc-fab__icon material-icons'>add</i>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Extended FAB (without Icon)</h3>
    <Fab extended textLabel='Create'>
      <span className='mdc-fab__label'>Create</span>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>FAB (Shaped)</h3>
    <div className='demo-fab-shaped'>
      <Fab ariaLabel='Favorite' className='demo-fab-shaped--one'>
        <i className='mdc-fab__icon material-icons'>favorite_border</i>
      </Fab>
      <Fab mini ariaLabel='Favorite' className='demo-fab-shaped--two'>
        <i className='mdc-fab__icon material-icons'>favorite_border</i>
      </Fab>
      <Fab extended textLabel='Create' className='demo-fab-shaped--three'>
        <i className='mdc-fab__icon material-icons'>add</i>
        <span className='mdc-fab__label'>Create</span>
      </Fab>
    </div>
  </div>
);

export const FabHero = () => {
  return (
      <Fab ariaLabel='Favorite'>
        <i className='mdc-fab__icon material-icons'>favorite_border</i>
      </Fab>
  );
};

const FabCatalog = () => {
  const description = 'Floating action buttons represents the primary action in an application. '
    + 'Only one floating action button is recommended per screen to represent the most common action.';
  return (
    <ComponentCatalogPanel
      hero={<FabHero/>}
      title='Floating Action Button'
      description={description}
      designLink='https://material.io/go/design-fab'
      docsLink='https://material.io/components/web/catalog/buttons/floating-action-buttons/'
      sourceLink='https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/'
      demos={<FabDemos/>}
    />
  );
}

export default FabCatalog;
