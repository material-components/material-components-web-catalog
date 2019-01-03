import React, {Component} from 'react';
import {Radio} from './RadioButtonCatalog';
import {withFormField} from './FormField';
import queryString from 'query-string';
import {MDCTextField} from '@material/textfield/index';

export class HeroOptionsComponent extends Component {
  render() {
    return (
        <div className='hero-options'>
          <ul className='mdc-list mdc-list--non-interactive'>
            {this.props.config.options && this.props.config.options.map((option, index) => {
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
      return <li className='mdc-list-item'><LabelOption>{option.name}</LabelOption></li>;
    case 'radiogroup':
      return <RadioGroupOption urlKey={option.urlParam} {...option} {...props}/>;
    default: // Text field
      return <TextFieldOption {...option} {...props}/>;
  }
};

const RadioFormField = withFormField(Radio);

const updateUrl = (history, key, newValue, search) => {
  const urlParams = queryString.parse(search);

  urlParams[key] = newValue;

  history.push({
    pathname: history.location.pathname,
    search: queryString.stringify(urlParams),
  });
};

const LabelOption = ({children}) => {
  return (
      <span className='mdc-typography--subtitle2'>{children}</span>
  )
};

//TODO: Refactor to remove anon function from onChange.
const RadioGroupOption = ({name, options, value, urlKey, history, location}) => {
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
                    onChange={() => updateUrl(history, urlKey, opt.value, location.search)}/>
              </li>
          )
        })}
      </React.Fragment>
  )
};

//TODO: debounce the input onChange method.
class TextFieldOption extends Component {
  textField = null;
  tfRef = (el) => el && new MDCTextField(el);

  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
  }

  componentDidUpdate() {
    if (this.textField) {
      this.textField.layout();
    }
  }

  componentWillUnmount() {
    if (this.textField) this.textField.destroy();
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({value});
    updateUrl(this.props.history, this.props.option.urlParam, value, this.props.location.search);
  };

  render() {
    return (
        <React.Fragment>
          <li key={this.props.name} className='mdc-list-item catalog-tf-list-item'>
            <div className='mdc-text-field' ref={this.tfRef}>
              <input type='text' id='my-text-field'
                     className='mdc-text-field__input' value={this.state.value}
                     onChange={this.onChange} />
              <label className='mdc-floating-label' htmlFor='my-text-field'>{this.props.label}</label>
              <div className='mdc-line-ripple' />
            </div>
          </li>
        </React.Fragment>
    )
  }
}