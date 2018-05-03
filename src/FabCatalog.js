import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple';

import './styles/FabCatalog.scss';

class Fab extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const {mini} = this.props;
    const classes = `mdc-fab material-icons ${mini ? 'mdc-fab--mini' : ''}`;

    return (
      <button
        className={classes}
        aria-label='Favorite'
        ref={fabEl => {
          if(fabEl) { this.ripple = new MDCRipple(fabEl); }
        }}
      >
        <span className='mdc-fab__icon'>
          favorite_border
        </span>
      </button>
    );
  }
}

const FabDemos = () => (
  <div>
    <h3 className='mdc-typography--subheading2'>Standard Floating Action Button</h3>
    <Fab />

    <h3 className='mdc-typography--subheading2'>Mini Floating Action Button</h3>
    <Fab mini />
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
      designLink='https://material.io/guidelines/components/buttons-floating-action-button.html'
      docsLink='https://material.io/components/web/catalog/buttons/floating-action-buttons/'
      sourceLink='https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/'
      demos={<FabDemos/>}
    />
  );
}

export default FabCatalog;
