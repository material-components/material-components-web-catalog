import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {Select} from '../../SelectCatalog';

export default class SelectOption extends Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  onChange = (value) => {
    if (!this._isMounted) return;
    const {urlKey, history, location} = this.props;
    updateUrl(history, urlKey, value, location.search);
  }

  render() {
    const {name, options, value: defaultValue} = this.props;
    return (
      <Select
        options={options}
        title={name}
        defaultValue={defaultValue}
        indicatorText={name}
        onChange={this.onChange}
      />
    );
  }
}