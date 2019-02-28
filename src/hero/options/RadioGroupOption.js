import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {Radio} from '../../RadioButtonCatalog';
import {withFormField} from '../../FormField';

const RadioFormField = withFormField(Radio);

export default class RadioGroupOption extends Component {
  onChange = (opt) => {
    const {urlKey, history, location} = this.props;
    updateUrl(history, urlKey, opt.value, location.search);
  };

  render() {
    const {name, options, value} = this.props;
    return (
      <React.Fragment>
        <li className='mdc-list-item'><span
            className='mdc-typography--subtitle1'>{name}</span></li>
        {options.map((opt) => {
          return (
            <li key={opt.value} className='mdc-list-item'>
              <RadioFormField
                name='demo-radio-set'
                label={opt.label}
                defaultChecked={value === opt.value}
                onChange={() => this.onChange(opt)}/>
            </li>
          )
        })}
      </React.Fragment>
    );
  }
}
