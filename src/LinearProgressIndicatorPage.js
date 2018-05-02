import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCLinearProgress} from '@material/linear-progress/dist/mdc.linearProgress';

import './styles/LinearProgressIndicatorPage.scss';

const LinearProgressPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<LinearProgressHero />}
        title='Linear Progress Indicator'
        description='Progress indicators display the length of a process or express an unspecified wait time.'
        designLink='https://material.io/guidelines/components/progress-activity.html'
        docsLink='https://material.io/components/web/catalog/linear-progress/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress'
        demos={<LinearProgressDemos />}
      />
    </div>
  );
}

class LinearProgressHero extends Component {
  initIndicator = (indicatorEl) => {
    this.indicator = new MDCLinearProgress(indicatorEl);
    this.indicator.progress = 0.5;
  }

  componentWillUnmount() {
    this.indicator.destroy();
  }

  render() {
    return (
      <div className='hero-linear-progress-indicator'>
        <div role='progressbar' className='mdc-linear-progress' ref={this.initIndicator}>
          <div className='mdc-linear-progress__buffering-dots'></div>
          <div className='mdc-linear-progress__buffer'></div>
          <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
            <span className='mdc-linear-progress__bar-inner'></span>
          </div>
          <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
            <span className='mdc-linear-progress__bar-inner'></span>
          </div>
        </div>
      </div>
    );
  }
}

class LinearProgressDemos extends Component {
  constructor(props) {
    super(props);
    this.indicators = [];
  }

  initIndicator = (indicatorEl) => {
    const indicator = new MDCLinearProgress(indicatorEl);
    indicator.progress = 0.5;
    this.indicators.push(indicator);
  }

  initBufferIndicator = (indicatorEl) => {
    const indicator = new MDCLinearProgress(indicatorEl);
    indicator.progress = 0.5;
    indicator.buffer = 0.75;
    this.indicators.push(indicator);
  }

  componentWillUnmount() {
    this.indicators.forEach(indicator => indicator.destroy());
  }

  renderLinearProgressVariant(title, variantClass, buffer) {
    const initFunction = buffer ? this.initBufferIndicator : this.initIndicator;
    return (
      <div class='demo-linear-progress-indicator'>
        <h3>{title}</h3>
        <div role='progressbar'
          className={`mdc-linear-progress ${variantClass}`} 
          ref={initFunction}>
          <div className='mdc-linear-progress__buffering-dots'></div>
          <div className='mdc-linear-progress__buffer'></div>
          <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
            <span className='mdc-linear-progress__bar-inner'></span>
          </div>
          <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
            <span className='mdc-linear-progress__bar-inner'></span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLinearProgressVariant('Buffered', '', true)}
        {this.renderLinearProgressVariant('Indeterminate', 'mdc-linear-progress--indeterminate')}
        {this.renderLinearProgressVariant('Reversered', 'mdc-linear-progress--reversed')}
        {this.renderLinearProgressVariant('Reversered Buffered', 'mdc-linear-progress--reversed', true)}
      </div>
    );
  }
}

export default LinearProgressPage;
