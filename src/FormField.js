import React, {Component} from 'react';
import classnames from 'classnames';
import {MDCFormField} from '@material/form-field/index';

import './styles/FormField.scss';

function withFormField(WrappedComponent) {
  return class extends Component {
    initLabel = (formFieldEl) => this.formField = formFieldEl && new MDCFormField(formFieldEl);
    handleInit = (inputEl) => this.input = inputEl;

    componentWillMount() {
      this.id_ = Math.random();
    }

    componentDidMount() {
      if (!this.formField || !this.input) return;
      this.formField.input = this.input;
    }

    componentWillUnmount() {
      if (!this.formField) return;
      this.formField.destroy();
    }

    render() {
      const classes = classnames('mdc-form-field', this.props.className);
      // Grab all props except className since we apply className to the parent component
      const {className, ...passThroughProps} = this.props;

      return (
        <div className={classes} ref={this.initLabel}>
          <WrappedComponent id={this.id_} handleInit={this.handleInit} {...passThroughProps} />
          <label htmlFor={this.id_}>{this.props.label}</label>
        </div>
      )
    }
  }
}

export {withFormField};
