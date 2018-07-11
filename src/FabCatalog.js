import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple';

import './styles/FabCatalog.scss';

class Fab extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const classes = `mdc-fab
      ${this.props.mini ? 'mdc-fab--mini ' : ''}
      ${this.props.extended ? 'mdc-fab--extended ' : ''}
      ${this.props.classes ? this.props.classes : ''}`;
    const ariaLabel = this.props.ariaLabel || this.props.textLabel;

    return (
      <button
        className={classes}
        aria-label={ariaLabel}
        ref={fabEl => {
          if(fabEl) { this.ripple = new MDCRipple(fabEl); }
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

const FabDemos = () => (
  <div>
    <h3 className='mdc-typography--subtitle1'>Standard Floating Action Button</h3>
    <Fab ariaLabel='Favorite'>
      <span className='mdc-fab__icon material-icons'>favorite_border</span>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Mini Floating Action Button</h3>
    <Fab mini ariaLabel='Favorite'>
      <span className='mdc-fab__icon material-icons'>favorite_border</span>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Extended FAB</h3>
    <Fab extended textLabel='Create'>
      <span className='mdc-fab__icon material-icons'>add</span>
      <span className='mdc-fab__label'>Create</span>
    </Fab>


    <h3 className='mdc-typography--subtitle1'>Extended FAB (Text label followed by icon)</h3>
    <Fab extended textLabel='Create'>
      <span className='mdc-fab__label'>Create</span>
      <span className='mdc-fab__icon material-icons'>add</span>
    </Fab>

    <h3 className='mdc-typography--subtitle1'>Extended FAB (without Icon)</h3>
    <Fab extended textLabel='Create'>
      <span className='mdc-fab__icon material-icons'>add</span>
    </Fab>
  </div>
);

const FabCatalog = () => {
  const description = 'Floating action buttons represents the primary action in an application. '
    + 'Only one floating action button is recommended per screen to represent the most common action.';
  return (
    <ComponentCatalogPanel
      hero={<Fab />}
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
