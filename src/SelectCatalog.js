import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSelect} from '@material/select/index';

import './styles/SelectCatalog.scss';

const SelectCatalog = () => {
  const description = 'Selects allow users to select from a single-option menu. It functions as a wrapper around the browser\'s native <select> element.';
  return (
    <ComponentCatalogPanel
      hero={<SelectHero />}
      title='Select'
      description={description}
      designLink='https://material.io/go/design-text-fields'
      docsLink='https://material.io/components/web/catalog/input-controls/select-menus/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-select'
      demos={<SelectDemos />}
    />
  );
}

class SelectHero extends Component {
  initSelect = (selectEl) => {
    if (!selectEl) return;
    this.select = new MDCSelect(selectEl);
  }

  componentWillUnmount() {
    this.select.destroy();
  }

  render() {
    const heroId = 'select-hero';
    return (
      <div>
        <div className='mdc-select' ref={this.initSelect}>
          <i className='mdc-select__dropdown-icon'></i>
          <select id={heroId} className='mdc-select__native-control'  defaultValue=''>
            <option value='' disabled></option>
            <option value='apple'>
              Apple
            </option>
            <option value='orange'>
              Orange
            </option>
            <option value='banana'>
              Banana
            </option>
          </select>
          <Label text='Fruit' selectId={heroId}/>
          <LineRipple/>
        </div>
      </div>
    );
  }
}

const outlinedClass = 'mdc-select--outlined';
function isOutlinedVariant(variantClass) {
  return variantClass.indexOf(outlinedClass) >= 0;
}

class SelectDemos extends Component {
  selects = [];

  initSelect = (selectEl) => {
    if (!selectEl) return;
    const select = new MDCSelect(selectEl);
    this.selects.push(select);
  }

  componentWillUnmount() {
    this.selects.forEach(select => select.destroy());
  }

  renderNativeSelectVariant(title, variantClass) {
    const selectId = title.split(' ').join('_').toLowerCase();
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-select ${variantClass}`} ref={this.initSelect}>
          <i className='mdc-select__dropdown-icon'></i>
          <select id={selectId} className='mdc-select__native-control' defaultValue=''>
            <option value='' disabled></option>
            <option value='apple'>
              Apple
            </option>
            <option value='orange'>
              Orange
            </option>
            <option value='banana'>
              Banana
            </option>
          </select>
          <Indicator selectId={selectId} text='Fruit' variantClass={variantClass}/>
        </div>
      </div>
    );
  }

  renderEnhancedSelectVariant(title, variantClass) {
    const selectId = title.split(' ').join('_').toLowerCase();
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-select demo-enhanced-width ${variantClass}`} ref={this.initSelect}>
          <i className='mdc-select__dropdown-icon'></i>
          <div id={selectId} role='button' aria-haspopup='listbox' aria-labelledby={`${selectId} ${selectId}-label`} className='mdc-select__selected-text'></div>
          <div className='mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-width'>
            <ul className='mdc-list'>
              <li className='mdc-list-item' role='option' aria-selected='false' data-value='' disabled></li>
              <li className='mdc-list-item' role='option' aria-selected='false' data-value='apple'>
                Apple
              </li>
              <li className='mdc-list-item' role='option' aria-selected='false' data-value='orange'>
                Orange
              </li>
              <li className='mdc-list-item' role='option' aria-selected='false' data-value='banana'>
                Banana
              </li>
            </ul>
          </div>
          <Indicator isEnhanced selectId={selectId} text='Fruit' variantClass={variantClass}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='select-row'>
          {this.renderNativeSelectVariant('Filled', '')}
          {this.renderEnhancedSelectVariant('Filled Enhanced', '')}
        </div>
        <div className='select-row'>
          {this.renderNativeSelectVariant('Outlined', outlinedClass)}
          {this.renderEnhancedSelectVariant('Outlined Enhanced', outlinedClass)}
        </div>
        <div className='select-row'>
          {this.renderNativeSelectVariant('Shaped Filled', 'demo-select-box-shaped')}
          {this.renderEnhancedSelectVariant('Shaped Filled Enhanced', 'demo-select-box-shaped')}
        </div>
        <div className='select-row'>
          {this.renderNativeSelectVariant('Shaped Outlined', `${outlinedClass} demo-select-outline-shaped`)}
          {this.renderEnhancedSelectVariant('Shaped Outlined Enhanced', `${outlinedClass} demo-select-outline-shaped`)}
        </div>
      </div>
    );
  }
}

const Indicator = ({variantClass, isEnhanced, text, selectId}) => {
  if (isOutlinedVariant(variantClass)) {
    return (<Outline isEnhanced text='Fruit' selectId={selectId}/>);
  }
  return (
    <React.Fragment>
      <Label isEnhanced text='Fruit' selectId={selectId}/>
      <LineRipple/>
    </React.Fragment>
  );
};

const LineRipple = () => (<div className='mdc-line-ripple'></div>);

const Outline = ({text, selectId, isEnhanced}) => (
  <div className='mdc-notched-outline' key='outline'>
    <div className='mdc-notched-outline__leading'></div>
    <div className='mdc-notched-outline__notch'>
      <Label selectId={selectId} text={text} isEnhanced={isEnhanced} />
    </div>
    <div className='mdc-notched-outline__trailing'></div>
  </div>
);

const Label = ({text, selectId, isEnhanced}) => isEnhanced ? (
  <span id={`${selectId}-label`} className='mdc-floating-label'>{text}</span>
) : (
  <label htmlFor={selectId} className='mdc-floating-label'>{text}</label>
);

export default SelectCatalog;
