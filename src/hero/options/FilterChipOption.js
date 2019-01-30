import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {ChipSet, Chip} from '@material/react-chips';

import '@material/react-chips/index.scss';

export default class FilterChipOption extends Component {
  state = {selectedChipIds: this.props.value ? this.props.value : []};
  chips = new Set([this.props.value]);

  // TODO: replace with a handleSelect method and componentDidUpdate
  // Can do refactor once rc0.10.0 is released
  // https://github.com/material-components/material-components-web-react/pull/645
  onChipClick = (e) => {
    const {history, urlParam, location} = this.props;
    const chip = e.target.closest('.mdc-chip');
    const chipId = chip.getAttribute('data-id');
    const isChipSelected = this.chips.has(chipId);
    if (isChipSelected) {
      this.chips.delete(chipId);
    } else {
      this.chips.add(chipId);
    }
    updateUrl(history, urlParam, Array.from(this.chips).toString(), location.search);
  }

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
          <span className='mdc-typography--body2'>
            {optionDescription}
          </span>
        </li>
        <li className='mdc-list-item'>
          <ChipSet
            filter
            className='hero-component__filter-chip-set-option'
            selectedChipIds={this.state.selectedChipIds}
          >
            {options.map((opt) => (
              <Chip
                onClick={this.onChipClick}
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
