import React, {Component} from 'react';
import queryString from 'query-string';
import TextFieldOption from './options/TextFieldOption';
import RadioGroupOption from './options/RadioGroupOption';
import SelectOption from './options/SelectOption';
import FilterChipOption from './options/FilterChipOption';
import {getUrlParamsFromSearch} from './urlHelper';

export class HeroOptionsComponent extends Component {
  render() {
    const {config, className} = this.props;
    if (!(config && config.options && config.order)) return null;

    return (
      <div className={`hero-options ${className}`}>
        <ul className='mdc-list mdc-list--non-interactive'>
          {config.order.map((optionKey, index) => {
            const {options} = config;
            const option = options[optionKey];
            return <Option key={option.name + index} option={option} {...this.props}/>
          })}
        </ul>
      </div>
    );
  }
}

const Option = (props) => {
  return getOptionComponent(props.option, props);
};

const getOptionComponent = (option, props) => {
  switch(option.type) {
    case 'label':
      return (<li className='mdc-list-item'>
        <LabelOption>{option.name}</LabelOption>
      </li>);
    case 'filterchips':
      return <FilterChipOption {...option} {...props}/>;
    case 'radiogroup':
      return <RadioGroupOption {...option} {...props}/>;
    case 'select':
      return <SelectOption {...option} {...props}/>;
    default:
      return <TextFieldOption {...option} {...props}/>;
  }
};

export const updateUrl = (history, key, newValue, search) => {
  const urlParams = getUrlParamsFromSearch(search);

  urlParams[key] = newValue;
  history.push({
    pathname: history.location.pathname,
    search: queryString.stringify(urlParams),
  });
};

const LabelOption = ({children}) => {
  return (
    <span className='mdc-typography--overline'>{children}</span>
  )
};
