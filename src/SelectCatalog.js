import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCSelect} from '@material/select/dist/mdc.select';

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
    return (
      <div>
        <div className='mdc-select demo-select' ref={this.initSelect}>
          <select className='mdc-select__native-control'  defaultValue=''>
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
          <label className='mdc-floating-label'>Fruit</label>
          <div className='mdc-line-ripple'></div>
        </div>
      </div>
    );
  }
}

const outlinedClass = 'mdc-select--outlined';

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

  renderSelectVariant(title, variantClass) {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-select demo-select ${variantClass}`} ref={this.initSelect}>
          <select className='mdc-select__native-control' defaultValue=''>
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
          <label className='mdc-floating-label'>Fruit</label>
          {this.getIndicator(variantClass)}
        </div>
      </div>
    );
  }

  getIndicator(variantClass) {
    if (variantClass.indexOf(outlinedClass) >= 0) {
      return (
        <React.Fragment>
          <div className='mdc-notched-outline'>
            <svg>
              <path className='mdc-notched-outline__path'></path>
            </svg>
          </div>
          <div className='mdc-notched-outline__idle'></div>
        </React.Fragment>
      );
    }

    return (<div className='mdc-line-ripple'></div>);
  }

  render() {
    return (
      <div>
        {this.renderSelectVariant('Box Select', 'mdc-select--box')}
        {this.renderSelectVariant('Outlined Select', outlinedClass)}
        {this.renderSelectVariant('Shaped Box Select', 'mdc-select--box demo-select-box-shaped')}
        {this.renderSelectVariant('Shaped Outlined Select', `${outlinedClass} demo-select-outline-shaped`)}
      </div>
    );
  }
}

export default SelectCatalog;
