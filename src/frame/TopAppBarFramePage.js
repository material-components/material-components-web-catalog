import {MDCTopAppBar} from '@material/top-app-bar/index';
import React, {Component} from 'react';

import '../styles/TopAppBarFramePage.scss';

const propToVariant = {
  short: {title: 'Short', variant: 'mdc-top-app-bar--short'},
  shortCollapsed: {title: 'Short - Always Collapsed', variant: 'mdc-top-app-bar--short mdc-top-app-bar--short-collapsed'},
  fixed: {title: 'Fixed', variant: 'mdc-top-app-bar--fixed'},
  prominent: {title: 'Prominent', variant: 'mdc-top-app-bar--prominent'},
  dense: {title: 'Dense', variant: 'mdc-top-app-bar--dense'},
  standard: {title: 'Standard', variant: 'mdc-top-app-bar--standard'},
};

class TopAppBarFramePage extends Component {

  topAppBar = null;
  initTopAppBar = topAppBarEle => this.topAppBar = new MDCTopAppBar(topAppBarEle);

  componentWillUnmount() {
    if (this.topAppBar) {
      this.topAppBar.destroy();
    }
  }

  render() {
    return (
      <div className='top-app-bar__frame'>
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
    const topAppBarIconsClasses = 'material-icons mdc-top-app-bar__action-item';
    const topAppBarIconSectionClasses = 'mdc-top-app-bar__section mdc-top-app-bar__section--align-end';

    if (isShort) {
      return (
        <section className={topAppBarIconSectionClasses}>
          <button className={topAppBarIconsClasses} aria-label='Download'>file_download</button>
        </section>
      );
    } else {
      return (
        <section className={topAppBarIconSectionClasses}>
          <button className={topAppBarIconsClasses} aria-label='Download'>file_download</button>
          <button className={topAppBarIconsClasses} aria-label='Print this page'>print</button>
          <button className={topAppBarIconsClasses} aria-label='Bookmark this page'>bookmark</button>
        </section>
      );
    }
  }
}

export default TopAppBarFramePage;
