import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {Radio} from '../../RadioButtonCatalog';
import {withFormField} from '../../FormField';

const RadioFormField = withFormField(Radio);

//TODO: Refactor to remove anon function from onChange.
export default class RadioGroupOption extends Component {
  render() {
    const {name, options, value, urlKey, history, location} = this.props;
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
                      onChange={() => updateUrl(history, urlKey, opt.value,
                          location.search)}/>
                </li>
            )
          })}
        </React.Fragment>
    )
  }
}