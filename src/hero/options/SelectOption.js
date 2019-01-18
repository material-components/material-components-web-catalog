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
      <li className='mdc-list-item catalog-tf-list-item'>
        <Select
          variantClass='mdc-select--outlined'
          hasHeader={false}
          options={options}
          title={name}
          defaultValue={defaultValue}
          indicatorText={name}
          onChange={this.onChange}
        />
      </li>
    );
  }
}