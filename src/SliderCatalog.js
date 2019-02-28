import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSlider} from '@material/slider/index';

import './styles/SliderCatalog.scss';

const SliderCatalog = () => (
  <ComponentCatalogPanel
    hero={<SliderHero/>}
    title='Slider'
    description='Sliders let users select from a range of values by moving the slider thumb.'
    designLink='https://material.io/go/design-sliders'
    docsLink='https://material.io/components/web/catalog/input-controls/sliders/'
    sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider'
    demos={<SliderDemos/>}
  />
);

export class SliderHero extends Component {
  initSlider = (sliderEl) => {
    if (!sliderEl) return;
    this.slider = new MDCSlider(sliderEl);
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  render() {
    return (
      <div className='mdc-slider' tabIndex='0' role='slider'
          aria-valuemin='0' aria-valuemax='100' aria-valuenow='50'
          aria-label='Select Value'
          ref={this.initSlider}>
        <div className='mdc-slider__track-container'>
          <div className='mdc-slider__track'></div>
        </div>
        <div className='mdc-slider__thumb-container'>
          <svg className='mdc-slider__thumb' width='21' height='21'>
            <circle cx='10.5' cy='10.5' r='7.875'></circle>
          </svg>
          <div className='mdc-slider__focus-ring'></div>
        </div>
      </div>
    );
  }
}

class SliderDemos extends Component {
  sliders = [];

  initSlider = (sliderEl) => {
    if (!sliderEl) return;
    this.sliders.push(new MDCSlider(sliderEl));
  }

  componentWillUnmount() {
    this.sliders.forEach(slider => slider.destroy());
  }

  renderSliderVariant(title, variantClass) {
    const isDiscrete = variantClass.indexOf('mdc-slider--discrete') > -1;
    return (
      <div className='demo-slider'>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-slider ${variantClass}`} tabIndex='0' role='slider'
          aria-valuemin='0' aria-valuemax='50' aria-valuenow='25'
          aria-label='Select Value'
          ref={this.initSlider}>
          <div className='mdc-slider__track-container'>
            <div className='mdc-slider__track'></div>
            {variantClass === 'mdc-slider--discrete mdc-slider--display-markers' &&
              <div className='mdc-slider__track-marker-container'></div>
            }
          </div>
          <div className='mdc-slider__thumb-container'>
            {isDiscrete &&
              <div className='mdc-slider__pin'>
                <span className='mdc-slider__pin-value-marker'></span>
              </div>
            }
            <svg className='mdc-slider__thumb' width='21' height='21'>
              <circle cx='10.5' cy='10.5' r='7.875'></circle>
            </svg>
            <div className='mdc-slider__focus-ring'></div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSliderVariant('Continuous', '')}
        {this.renderSliderVariant('Discrete', 'mdc-slider--discrete')}
        {this.renderSliderVariant('Discrete with Tick Marks', 'mdc-slider--discrete mdc-slider--display-markers')}
      </div>
    );
  }
}

export default SliderCatalog;
