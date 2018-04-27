import {MDCTopAppBar} from '@material/top-app-bar/index';
import React, {Component} from 'react';

const TopAppBarFramePage = (props) => {
  return (
    <TopAppBarFrame type={props.type} />
  );
};

const propToVariant = {
  short: {title: 'Short', variant: 'mdc-top-app-bar--short'},
  shortCollapsed: {title: 'Short - Always Collapsed', variant: 'mdc-top-app-bar--short mdc-top-app-bar--short-collapsed'},
  fixed: {title: 'Fixed', variant: 'mdc-top-app-bar--fixed'},
  prominent: {title: 'Prominent', variant: 'mdc-top-app-bar--prominent'},
  dense: {title: 'Dense', variant: 'mdc-top-app-bar--dense'},
  standard: {title: 'Standard', variant: 'mdc-top-app-bar--standard'},
};

class TopAppBarFrame extends Component {
  topAppBar = null;

  constructor(props) {
    super(props);
    this.initTopAppBar = topAppBarEle => this.topAppBar = new MDCTopAppBar(topAppBarEle);
  }

  componentWillUnmount() {
    if (this.topAppBar) {
      this.topAppBar.destroy();
    }
  }

  render() {
    return (
      <div style={{height: '500px'}}>
        {this.getVariant(propToVariant[this.props.type])}
      </div>
    );
  }

  getVariant(type = propToVariant.standard) {
    return (
      <div className='demo-frame'>
        <header className={`mdc-top-app-bar ${type.variant}`} ref={this.initTopAppBar}>
          <div className='mdc-top-app-bar__row'>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <button className='material-icons mdc-top-app-bar__navigation-icon'>menu</button>
              <span className='mdc-top-app-bar__title'>{type.title}</span>
            </section>
            {this.getIcons(type.variant)}
          </div>
        </header>
      </div>
    );
  }

  getIcons(variant) {
    const isShort = variant.startsWith('mdc-top-app-bar--short');
    if (isShort) {
      return (
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <button className='material-icons mdc-top-app-bar__action-item' aria-label='Download'>file_download</button>
        </section>
      );
    } else {
      return (
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <button className='material-icons mdc-top-app-bar__action-item' aria-label='Download'>file_download</button>
          <button className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page'>print</button>
          <button className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page'>bookmark</button>
        </section>
      );
    }
  }
}

export default TopAppBarFramePage;