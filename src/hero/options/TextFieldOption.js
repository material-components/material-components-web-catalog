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
    const {label, header} = this.props;
    return (
        <React.Fragment>
          {header ? <li className='mdc-list-item'>
            <span className='mdc-typography--overline'>
              {header}
            </span>
          </li> : null}
          <li key={header} className='mdc-list-item catalog-tf-list-item'>
            <div className='mdc-text-field mdc-text-field--outlined' ref={this.tfRef}>
              <input type='text' id='my-text-field'
                     className='mdc-text-field__input' value={this.state.value}
                     onChange={this.onChange} />
              <div className='mdc-notched-outline'>
                <div className='mdc-notched-outline__leading'/>
                <div className='mdc-notched-outline__notch'>
                  <label className='mdc-floating-label' htmlFor='my-text-field'>{label}</label>
                </div>
                <div className='mdc-notched-outline__trailing'/>
              </div>
            </div>
          </li>
        </React.Fragment>
    )
  }
}
