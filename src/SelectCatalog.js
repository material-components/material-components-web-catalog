import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import { MDCSelect } from '@material/select/index';

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

export class SelectHero extends Component {
  initSelect = (selectEl) => {
    if (!selectEl) return;
    this.select = new MDCSelect(selectEl);
  }

  componentWillUnmount() {
    if (!this.select) return;

    this.select.destroy();
  }

  render() {
    const options = [{
      value: '',
      label: '',
      disabled: true
    }, {
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'orange',
      label: 'Orange'
    }, {
      value: 'banana',
      label: 'Banana'
    }];
    return (<Select options={options} variantClass='demo-enhanced-width' />);
  }
}

export class Select extends Component {
  select;

  initSelect = (selectEl) => {
    if (!selectEl) return;
    const select = new MDCSelect(selectEl);
    this.select = select;
  };

  componentDidMount() {
    if (this.props.native) return;
    if (this.props.onChange) {
      this.select.listen('MDCSelect:change', (event) => {
        this.props.onChange(event.detail.value);
      });
    }

    if (this.props.defaultValue) {
      this.select.value = this.props.defaultValue;
    }
  }

  componentWillUnmount() {
    if (!this.select) return;

    this.select.destroy();
  }

  renderVariant({
    title = '',
    options,
    indicatorText = 'Fruit',
    widthClass,
    outlined
  }) {
    const selectId = title.split(' ').join('_').toLowerCase();

    if (outlined) {
      return (<div className={`mdc-select mdc-select--outlined demo-enhanced-select ${widthClass}`} ref={this.initSelect}>
        <div className='mdc-select__anchor custom-enhanced-select-width'>
          <i className='mdc-select__dropdown-icon' />
          <div id='demo-selected-text' className='mdc-select__selected-text' />
          <div className='mdc-notched-outline'>
            <div className='mdc-notched-outline__leading' />
            <div className='mdc-notched-outline__notch'>
              <label id={`${selectId}-label`} class='mdc-floating-label'>{indicatorText}</label>
            </div>
            <div className='mdc-notched-outline__trailing' />
          </div>
        </div>
        <div className={`mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width ${widthClass}`}>
          <ul className='mdc-list'>
            {
              options.map((opt, index) => (
                <li
                  data-value={opt.value}
                  disabled={opt.disabled}
                  key={index}
                  aria-selected='false'
                  role='option'
                  className='mdc-list-item'
                >
                  {opt.label}
                </li>
              ))
            }
          </ul>
        </div>
      </div>);
    } else {
      return (
        <div className='mdc-select' ref={this.initSelect}>
          <div className='mdc-select__anchor custom-enhanced-select-width'>
            <i className='mdc-select__dropdown-icon' />
            <div className='mdc-select__selected-text' />
            <span className='mdc-floating-label'>{indicatorText}</span>
            <div className='mdc-line-ripple' />
          </div>
          <div className={`mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width ${widthClass}`}>
            <ul className='mdc-list'>
              {
                options.map((opt, index) => (
                  <li
                    data-value={opt.value}
                    disabled={opt.disabled}
                    key={index}
                    aria-selected='false'
                    role='option'
                    className='mdc-list-item'
                  >
                    {opt.label}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      );
    }
  }

  render() {
    const {
      title,
      variantClass = '',
      defaultValue,
      options,
      onChange,
      outlined,
      indicatorText,
      hasHeader = true,
      widthClass = '',
    } = this.props;

    const select = this.renderVariant({ title, defaultValue, variantClass, onChange, outlined, options, indicatorText, widthClass });

    return (
      <div>
        {hasHeader ? <h3 className='mdc-typography--subtitle1'>{title}</h3> : null}
        {select}
      </div>
    )
  }
}

class SelectDemos extends Component {
  render() {
    const options = [{
      value: '',
      label: '',
      disabled: true
    }, {
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'orange',
      label: 'Orange'
    }, {
      value: 'banana',
      label: 'Banana'
    }];

    return (
      <div>
        <div className='select-row'>
          <Select options={options} title='Filled' variantClass='demo-enhanced-width' />
        </div>
        <div className='select-row'>
          <Select options={options} title='Outlined' outlined variantClass={'demo-enhanced-width'} />
        </div>
        <div className='select-row'>
          <Select options={options} title='Shaped Filled' variantClass='demo-enhanced-width demo-select-box-shaped' />
        </div>
        <div className='select-row'>
          <Select options={options} title='Shaped Outlined' outlined variantClass={'demo-enhanced-width demo-select-outline-shaped'} />
        </div>
      </div>
    );
  }
}

export default SelectCatalog;
