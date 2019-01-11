import React, {Component} from 'react';
import {MDCTextField} from '@material/textfield/index';
import {updateUrl} from '../HeroOptionsComponent';


//TODO(williamernest): debounce the input onChange method.
export default class TextFieldOption extends Component {
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
