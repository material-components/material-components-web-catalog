import {MDCTopAppBar} from '@material/top-app-bar/index';
import React, { Component } from 'react';

const TopAppBarShortCollapsedPage = () => {
  return (
      <TopAppBarShortCollapsed />
  );
};

class TopAppBarShortCollapsed extends Component {
  constructor(props) {
    super(props);
    this.topAppBar = null
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
          <header className='mdc-top-app-bar mdc-top-app-bar--short mdc-top-app-bar--short-collapsed' ref={this.initTopAppBar}>
            <div className='mdc-top-app-bar__row'>
              <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
                <button className='material-icons mdc-top-app-bar__navigation-icon'>menu</button>
                <span className='mdc-top-app-bar__title'>Title</span>
              </section>
              <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
                <button className='material-icons mdc-top-app-bar__action-item' aria-label='Download'>file_download</button>
              </section>
            </div>
          </header>
        </div>
    );
  }
}

export default TopAppBarShortCollapsedPage;