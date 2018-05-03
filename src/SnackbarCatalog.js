import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSnackbar} from '@material/snackbar/dist/mdc.snackbar';

import './styles/SnackbarCatalog.scss';

const SnackbarCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<SnackbarHero />}
      title='Snackbar'
      description='Snackbars provide brief feedback about an operation through a message at the bottom of the screen.'
      designLink='https://material.io/guidelines/components/snackbars-toasts.html'
      docsLink='https://material.io/components/web/catalog/snackbars/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar'
      demos={<SnackbarDemo />}
    />
  );
};

const SnackbarHero = () => {
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

class SnackbarDemo extends Component {
  state = {showSnackbar: false, showStartAlignedSnackbar: false};

  handleShowClick = () => {
    this.setState({showSnackbar: true});
  }

  handleShowStartAlignedClick = () => {
    this.setState({showStartAlignedSnackbar: true});
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
        <Snackbar show={this.state.showSnackbar}/>
        <Snackbar show={this.state.showStartAlignedSnackbar} startAligned={true}/>
      </div>
    )
  }
}

class Snackbar extends Component {
  snackbarData = {message: 'Message Sent', actionHandler: () => {}, actionText: 'Undo'};

  initSnackbar = (snackbarEl) => {
    this.snackbar = new MDCSnackbar(snackbarEl);
  }

  componentDidUpdate() {
    this.props.show && this.snackbar.show(this.snackbarData);
  }

  componentWillUnmount() {
    this.snackbar.destroy();
  }

  render() {
    return (
      <div className={'mdc-snackbar ' + (this.props.startAligned ? 'mdc-snackbar--align-start' : '')}
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'
        ref={this.initSnackbar}>
        <div className='mdc-snackbar__text'></div>
        <div className='mdc-snackbar__action-wrapper'>
          <button type='button' className='mdc-snackbar__action-button'></button>
        </div>
      </div>    
    )
  }
}

export default SnackbarCatalog;
