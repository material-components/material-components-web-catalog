import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSnackbar} from '@material/snackbar/dist/mdc.snackbar';
import classnames from 'classnames';

import './styles/SnackbarCatalog.scss';

const SnackbarCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<SnackbarHero />}
      title='Snackbar'
      description='Snackbars provide brief feedback about an operation through a message at the bottom of the screen.'
      designLink='https://material.io/go/design-snackbar'
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

  handleSnackbarShown = () => {
    this.setState({showSnackbar: false});
  }

  handleShowStartAlignedClick = () => {
    this.setState({showStartAlignedSnackbar: true});
  }

  handleShowStartAlignedSnackbarShown = () => {
    this.setState({showStartAlignedSnackbar: false});
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
        <Snackbar show={this.state.showSnackbar} handleShown={this.handleSnackbarShown}/>
        <Snackbar show={this.state.showStartAlignedSnackbar} startAligned={true} 
                  handleShown={this.handleShowStartAlignedSnackbarShown}/>
      </div>
    )
  }
}

class Snackbar extends Component {
  snackbarData = {message: 'Message Sent', actionHandler: () => {}, actionText: 'Undo'};

  initSnackbar = (snackbarEl) => {
    if (!snackbarEl) {
      return;
    }
    this.snackbar = new MDCSnackbar(snackbarEl);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show) {
      this.snackbar.show(this.snackbarData);
      this.props.handleShown();
    }
  }

  componentWillUnmount() {
    this.snackbar.destroy();
  }

  render() {
    const classes = classnames('mdc-snackbar', {
      'mdc-snackbar--align-start': this.props.startAligned,
    });

    return (
      <div className={classes}
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
