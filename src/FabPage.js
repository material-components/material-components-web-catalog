import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './styles/FabPage.scss';

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
    <h3 className='mdc-typography--subheading2'>Standard Floating Action</h3>
    <Fab />

    <h3 className='mdc-typography--subheading2'>Mini Floating Action</h3>
    <Fab mini />
  </div>
);

const FabPage = () => {
  const description = 'Floating action buttons represents the primary action in an application. '
    + 'Only one floating action button is recommended per screen to represent the most common action.';
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<Fab />}
        title='Floating Action Button'
        description={description}
        designLink='https://material.io/guidelines/components/buttons-floating-action-button.html'
        docsLink='https://material.io/components/web/catalog/buttons/floating-action-buttons/'
        sourceLink='https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/'
        demos={<FabDemos/>}
      />
    </div>
  );
}

export default FabPage;
