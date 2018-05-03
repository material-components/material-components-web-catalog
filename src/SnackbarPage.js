import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCSnackbar} from '@material/snackbar/dist/mdc.snackbar';

import './styles/SnackbarPage.scss';

const SnackbarPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<SnackbarHero />}
        title='Snackbar'
        description='Snackbars provide brief feedback about an operation through a message at the bottom of the screen.'
        designLink='https://material.io/guidelines/components/snackbars-toasts.html'
        docsLink='https://material.io/components/web/catalog/snackbars/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar'
        demos={<SnackbarDemo />}
      />
    </div>
  );
};

class SnackbarHero extends Component {
  render() {
    return (
      <div className='snackbar-hero'>
        <div className='mdc-snackbar mdc-snackbar--active'
            aria-live='assertive'
            aria-atomic='true'
            aria-hidden='true'>
          <div className='mdc-snackbar__text'>Message Sent</div>
          <div className='mdc-snackbar__action-wrapper'>
            <button type='button' className='mdc-snackbar__action-button'>Undo</button>
          </div>
        </div>
      </div>
    )
  }
}

class SnackbarDemo extends Component {
  snackbarData = {message: 'Message Sent', actionHandler: () => {}, actionText: 'Undo'};
  
  initSnackbar = (snackbarEl, isStartAligned) => {
    isStartAligned ? 
      this.startAlignedSnackbar = new MDCSnackbar(snackbarEl) : this.snackbar = new MDCSnackbar(snackbarEl);
  }

  componentWillUnmount() {
    this.snackbar.destroy();
    this.startAlignedSnackbar.destroy();
  }

  handleShowClick = () => {
    this.snackbar.show(this.snackbarData);
  }

  handleShowStartAlignedClick = () => {
    this.startAlignedSnackbar.show(this.snackbarData);
  }

  render() {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>Snackbars</h3>
        <button className='mdc-button mdc-button--raised snackbar-demo-button' onClick={this.handleShowClick}>
          Show snackbar
        </button>
        <button className='mdc-button mdc-button--raised snackbar-demo-button' 
                onClick={this.handleShowStartAlignedClick}>
          Show start aligned
        </button>
        <div className='mdc-snackbar'
          aria-live='assertive'
          aria-atomic='true'
          aria-hidden='true'
          ref={this.initSnackbar}>
            <div className='mdc-snackbar__text'></div>
            <div className='mdc-snackbar__action-wrapper'>
              <button type='button' className='mdc-snackbar__action-button'></button>
            </div>
        </div>
        <div className='mdc-snackbar mdc-snackbar--align-start'
          aria-live='assertive'
          aria-atomic='true'
          aria-hidden='true'
          ref={startAlignedSnackbarEl => this.initSnackbar(startAlignedSnackbarEl, true /* isStartAligned */)}>
            <div className='mdc-snackbar__text'></div>
            <div className='mdc-snackbar__action-wrapper'>
              <button type='button' className='mdc-snackbar__action-button'></button>
            </div>
        </div>
      </div>
    )
  }
}

export default SnackbarPage;
