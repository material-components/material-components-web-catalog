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

export class SelectHero extends Component {
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

class Select extends Component {
  select;

  initSelect = (selectEl) => {
    if (!selectEl) return;
    const select = new MDCSelect(selectEl);
    this.select = select;
  }

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
    this.select.destroy();
  }

  renderNativeSelectVariant({title, defaultValue, variantClass, options, indicatorText = 'Fruit'}) {
    const selectId = title.split(' ').join('_').toLowerCase();
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-select ${variantClass}`} ref={this.initSelect}>
          <i className='mdc-select__dropdown-icon'></i>
          <select 
            id={selectId} className='mdc-select__native-control' defaultValue={defaultValue}>
            {
              options.map((opt, index) => (
                <option
                  value={opt.value}
                  disabled={opt.disabled}
                  key={index}
                >
                  {opt.label}
                </option>
              ))
            }
          </select>
          <Indicator selectId={selectId} text={indicatorText} variantClass={variantClass}/>
        </div>
      </div>
    );
  }

  renderEnhancedSelectVariant({title, variantClass, options, indicatorText = 'Fruit'}) {
    const selectId = title.split(' ').join('_').toLowerCase();
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>{title}</h3>
        <div className={`mdc-select demo-enhanced-width ${variantClass}`} ref={this.initSelect}>
          <i className='mdc-select__dropdown-icon'></i>
          <div id={selectId} role='button' aria-haspopup='listbox' aria-labelledby={`${selectId} ${selectId}-label`} className='mdc-select__selected-text'></div>
          <div className='mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-width'>
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
          <Indicator isEnhanced selectId={selectId} text={indicatorText} variantClass={variantClass}/>
        </div>
      </div>
    );
  }

  render() {
    const {native, title, variantClass = '', defaultValue, options, onChange, indicatorText} = this.props;
    if (native) {
      return this.renderNativeSelectVariant({title, defaultValue, variantClass, onChange, options, indicatorText});
    }
    return this.renderEnhancedSelectVariant({title, defaultValue, variantClass, onChange, options, indicatorText});
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
      value: 'Banana',
      label: 'banana'
    }];

    return (
      <div>
        <div className='select-row'>
          <Select native options={options} title='Filled' />
          <Select options={options} title='Filled Enhanced' />
        </div>
        <div className='select-row'>
          <Select native options={options} title='Outlined' variantClass={outlinedClass} />
          <Select options={options} title='Outlined Enhanced' variantClass={outlinedClass} />
        </div>
        <div className='select-row'>
          <Select native options={options} title='Shaped Filled' variantClass='demo-select-box-shaped' />
          <Select options={options} title='Shaped Filled Enhanced' variantClass='demo-select-box-shaped' />
        </div>
        <div className='select-row'>
          <Select native options={options} title='Shaped Outlined' variantClass={`${outlinedClass} demo-select-outline-shaped`} />
          <Select options={options} title='Shaped Outlined Enhanced' variantClass={`${outlinedClass} demo-select-outline-shaped`} />
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
export {Select};
