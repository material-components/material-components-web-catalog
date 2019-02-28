import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {ChipSet, Chip} from '@material/react-chips';
import {getUrlParamsFromSearch} from '../urlHelper';

import '@material/react-chips/index.scss';

export default class FilterChipOption extends Component {
  constructor(props) {
    super(props);
    const {value} = props;
    this.state = {selectedChipIds: value ? value : []};
  }

  componentDidUpdate(prevProps) {
    const searchParams = getUrlParamsFromSearch(this.props.location.search);
    const icons = (searchParams.icons && searchParams.icons.split(',').filter((icon) => !!icon)) || [];
    if (icons.length !== this.state.selectedChipIds.length) {
      this.setState({selectedChipIds: icons});
    }
  }

  updateSelectedChipIds = (selectedChipIds) => {
    const {history, urlParam, location} = this.props;
    updateUrl(history, urlParam, selectedChipIds.toString(), location.search);
  };

  render() {
    const {
      name,
      options,
      optionDescription,
    } = this.props;

    return (
      <React.Fragment>
        <li className='mdc-list-item'>
          <span className='mdc-typography--overline'>
            {name}
          </span>
        </li>
        <li className='mdc-list-item'>
          <span className='mdc-typography--caption'>
            {optionDescription}
            Follow the <a href='http://google.github.io/material-design-icons/'>instructions</a> to embed the icon font in your site.
          </span>
        </li>
        <li className='mdc-list-item'>
          <ChipSet
            filter
            className='hero-component__filter-chip-set-option'
            selectedChipIds={this.state.selectedChipIds}
            handleSelect={this.updateSelectedChipIds}
          >
            {options.map((opt) => (
              <Chip
                key={opt.value}
                id={opt.value}
                data-id={opt.value}
                label={opt.label}
              />
            ))}
          </ChipSet>
        </li>
      </React.Fragment>
    );
  }
}
