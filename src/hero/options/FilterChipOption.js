import React, {Component} from 'react';
import {updateUrl} from '../HeroOptionsComponent';
import {ChipSet, Chip} from '@material/react-chips';
import equal from 'deep-equal';

import '@material/react-chips/index.scss';

export default class FilterChipOption extends Component {
  state = {selectedChipIds: []};

  componentDidUpdate(prevProps, prevState) {
    const {history, urlParam, location, options} = this.props;
    const {selectedChipIds} = this.state;
    debugger
    console.log(selectedChipIds, prevState.selectedChipIds)
    if (
      !options
      || !options.length
      || selectedChipIds === prevState.selectedChipIds
    ) {
      return;
    }
      
    updateUrl(history, urlParam, selectedChipIds, location.search);
  }

  handleSelect = (selectedChipIds) => this.setState({selectedChipIds});

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
          <li key={'test'} className='mdc-list-item'>
            <ChipSet
              filter
              selectedChipIds={this.state.selectedChipIds}
              handleSelect={this.handleSelect}
            >
              {options.map((opt) => (
                <Chip
                  key={opt.value}
                  id={opt.value}
                  label={opt.label}
                />
              ))}
            </ChipSet>
          </li>
        </React.Fragment>
    )
  }
}