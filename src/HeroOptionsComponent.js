import React, {Component} from 'react';
import {Radio} from './RadioButtonCatalog';
import {withFormField} from './FormField';
import queryString from 'query-string';
import {MDCTextField} from '@material/textfield/index';

export class HeroOptionsComponent extends Component {
  render() {
    return (
        <div className={'hero-options'}>
          <ul className={'mdc-list mdc-list--non-interactive'}>
            {this.props.config.options && this.props.config.options.map((option, index) => {
              return <Option key={option.name + index} option={option} {...this.props}/>
            })}
          </ul>
        </div>
    );
  }
}

const Option = (props) => {
  return (
      <React.Fragment>
        {getOptionCompponent(props.option, props)}
      </React.Fragment>
  )
};

const getOptionCompponent = (option, props) => {
  if (option.type === 'label') {
    return <li className={'mdc-list-item'}><Label>{option.name}</Label></li>;
  } else if (option.type === 'radiogroup') {
    return <RadioGroup {...option} {...props}/>;
  } else if (option.type === 'textfield') {
    return <TextFieldOption {...option} {...props}/>;
  }
};

const Label = ({children}) => {
  return (
      <span className={'mdc-typography--subtitle2'}>{children}</span>
  )
};

const RadioFormField = withFormField(Radio);

const updateUrl = (history, urlParams = {}, key, newValue) => {
  urlParams[key] = newValue;

  history.push({
    pathname: history.location.pathname,
    search: queryString.stringify(urlParams),
  });
};

const RadioGroup = ({name, options, value, history, urlParams}) => {
  return (
      <React.Fragment>
        <li className={'mdc-list-item'}> <span className={'mdc-typography--subtitle1'}>{name}</span></li>
        {options.map((opt, index) => {
          return (
              <li key={opt.value} className={'mdc-list-item'}>
                <RadioFormField name='demo-radio-set' label={opt.label} defaultChecked={value === opt.value} onChange={() => updateUrl(history, urlParams, 'type', opt.value)}/>
              </li>
          )
        })}
      </React.Fragment>
  )
};

class TextFieldOption extends Component {
  state = {value: ''};
  constructor(props) {
    super(props);
    this.textField = null;
    this.tfRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.textField) {
      this.textField.layout();
    } else {
      this.textField = new MDCTextField(this.tfRef.current);
    }
  }

  componentDidMount() {
    this.setState({value: this.props.value});
  }

  componentWillUnmount() {
    if (this.textField) this.textField.destroy();
  }


  render() {
    return (
        <React.Fragment>
          <li key={this.props.name} className={'mdc-list-item'}>
            <div className='mdc-text-field' ref={this.tfRef}>
              <input type='text' id='my-text-field'
                     className='mdc-text-field__input' value={this.state.value}
                     onChange={(event) => {
                       const val = event.target.value;
                       this.setState({value: val});
                       updateUrl(this.props.history, this.props.urlParams, 'label', val)
                     }} />
              <label className={'mdc-floating-label'} htmlFor='my-text-field'>{this.props.label}</label>
              <div className='mdc-line-ripple' />
            </div>
          </li>
        </React.Fragment>
    )
  }
}