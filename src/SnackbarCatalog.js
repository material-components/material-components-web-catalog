import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSnackbar} from '@material/snackbar/index';
import classnames from 'classnames';

import './styles/SnackbarCatalog.scss';

const SnackbarCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<SnackbarHero />}
      title='Snackbar'
      description='Snackbars provide brief messages about app processes at the bottom of the screen.'
      designLink='https://material.io/go/design-snackbar'
      docsLink='https://material.io/components/web/catalog/snackbars/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar'
      demos={<SnackbarDemo />}
    />
  );
};

export const SnackbarHero = () => {
  return (
      <div className='snackbar-hero'>
        <div className='mdc-snackbar mdc-snackbar--open'>
          <div className='mdc-snackbar__surface'>
            <div className='mdc-snackbar__label'
                 role='status'
                 aria-live='polite'>Can't send photo. Retry in 5 seconds.</div>
            <div className='mdc-snackbar__actions'>
              <button type='button' className='mdc-button mdc-snackbar__action'><div className='mdc-button__ripple'></div>Retry</button>
              <button className='mdc-icon-button mdc-snackbar__dismiss material-icons' title='Dismiss'>close</button>
            </div>
          </div>
        </div>
      </div>
  )
};

class SnackbarDemo extends Component {
  state = {isBaselineOpen: false, isLeadingOpen: false, isStackedOpen: false};

  queue = [];

  handleClick = (newState) => {
    this.queue.push(() => this.setState(newState));
    if (this.queue.length === 1) {
      this.queue[0]();
    }
  }

  handleClosed = (newState) => {
    this.setState(newState);
    this.queue.shift();
    if (this.queue.length > 0) {
      this.queue[0]();
    }
  }

  handleBaselineClick = () => {
    this.handleClick({isBaselineOpen: true});
  }

  handleBaselineClosed = () => {
    this.handleClosed({isBaselineOpen: false});
  }

  handleLeadingClick = () => {
    this.handleClick({isLeadingOpen: true});
  }

  handleLeadingClosed = () => {
    this.handleClosed({isLeadingOpen: false});
  }

  handleStackedClick = () => {
    this.handleClick({isStackedOpen: true});
  }

  handleStackedClosed = () => {
    this.handleClosed({isStackedOpen: false});
  }

  render() {
    return (
      <div>
        <button className='mdc-button mdc-button--raised snackbar-demo-button' onClick={this.handleBaselineClick}>
        <div className='mdc-button__ripple'></div>
        Baseline
        </button>
        <button className='mdc-button mdc-button--raised snackbar-demo-button'
                onClick={this.handleLeadingClick}>
          <div className='mdc-button__ripple'></div>
          Leading
        </button>
        <button className='mdc-button mdc-button--raised snackbar-demo-button'
                onClick={this.handleStackedClick}>
          <div className='mdc-button__ripple'></div>
          Stacked
        </button>
        <Snackbar isOpen={this.state.isBaselineOpen}
                  handleClosed={this.handleBaselineClosed}
                  labelText={'Can\'t send photo. Retry in 5 seconds.'}
                  actionText='Retry'/>
        <Snackbar isOpen={this.state.isLeadingOpen}
                  isLeading={true}
                  handleClosed={this.handleLeadingClosed}
                  labelText='Your photo has been archived.'
                  actionText='Undo'/>
        <Snackbar isOpen={this.state.isStackedOpen}
                  isStacked={true}
                  handleClosed={this.handleStackedClosed}
                  labelText='This item already has the label "travel". You can add a new label.'
                  actionText='Add a new label'/>
      </div>
    )
  }
}

class Snackbar extends Component {
  initSnackbar = (snackbarEl) => {
    if (!snackbarEl) {
      return;
    }
    this.snackbar = new MDCSnackbar(snackbarEl);
    this.snackbar.listen('MDCSnackbar:closed', () => this.props.handleClosed());
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.snackbar.open();
    }
  }

  componentWillUnmount() {
    this.snackbar.destroy();
  }

  render() {
    const classes = classnames('mdc-snackbar', {
      'mdc-snackbar--leading': this.props.isLeading,
      'mdc-snackbar--stacked': this.props.isStacked,
    });

    return (
      <div className={classes}
           ref={this.initSnackbar}>
        <div className='mdc-snackbar__surface'>
          <div className='mdc-snackbar__label'
               role='status'
               aria-live='polite'>{this.props.labelText}</div>
          <div className='mdc-snackbar__actions'>
            <button type='button' className='mdc-button mdc-snackbar__action'>
              <div className='mdc-button__ripple'></div>
              <div className='mdc-button__label'>{this.props.actionText}</div>
            </button>
            <button className='mdc-icon-button mdc-snackbar__dismiss material-icons' title='Dismiss'>close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SnackbarCatalog;
