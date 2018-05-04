import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCChipSet} from '@material/chips';

import './styles/ChipsCatalog.scss';

const ChipsCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<ChipsHero />}
      title='Chips'
      description='Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.'
      designLink='https://material.io/go/design-chips'
      docsLink='https://material.io/components/web/catalog/chips/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips'
      demos={<ChipsDemos />}
    />
  );
}

class ChipsHero extends Component {
  constructor(props) {
    super(props);
    this.chipSet = null;
  }

  componentWillUnmount() {
    this.chipSet.destroy();
  }

  renderChip(text) {
    return (
      <div className='mdc-chip' tabIndex='0'>
        <div className='mdc-chip__text'>{text}</div>
      </div>
    );
  }

  render() {
    const initChipSet = chipSetEl => {
      if (chipSetEl) {
        this.chipSet = new MDCChipSet(chipSetEl);
      }
    }
    return (
      <div className='mdc-chip-set' ref={initChipSet}>
        {this.renderChip('Chip One')}
        {this.renderChip('Chip Two')}
        {this.renderChip('Chip Three')}
        {this.renderChip('Chip Four')}
      </div>
    );
  }
}

class ChipsDemos extends Component {
  constructor(props) {
    super(props);
    this.chipSets = [];
  }

  componentWillUnmount() {
    this.chipSets.forEach(chipSet => chipSet.destroy());
  }

  renderIcon(name, classes) {
    return (
      <i className={`material-icons mdc-chip__icon ${classes}`}>
        {name}
      </i>
    );
  }

  renderFilterCheckmark() {
    return(
      <div className='mdc-chip__checkmark' >
        <svg className='mdc-chip__checkmark-svg' viewBox='-2 -3 30 30'>
          <path className='mdc-chip__checkmark-path' fill='none' stroke='black' d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
        </svg>
      </div>
    );
  }

  // For choice and action chips
  renderChip(text, classes, leadingIcon) {
    return (
      <div className={`mdc-chip ${classes}`} tabIndex='0'>
        {leadingIcon}
        <div className='mdc-chip__text'>{text}</div>
      </div>
    );
  }

  // For filter chips
  renderFilterChip(text, classes, leadingIcon) {
    return (
      <div className={`mdc-chip ${classes}`} tabIndex='0'>
        {leadingIcon}
        {this.renderFilterCheckmark()}
        <div className='mdc-chip__text'>{text}</div>
      </div>
    );
  }

  render() {
    const initChipSet = chipSetEl => chipSetEl && this.chipSets.push(new MDCChipSet(chipSetEl));
    return (
      <div>
        <h3>Choice Chips</h3>
        <div className='mdc-chip-set mdc-chip-set--choice' ref={initChipSet}>
          {this.renderChip('Extra Small')}
          {this.renderChip('Small')}
          {this.renderChip('Medium', 'mdc-chip--selected')}
          {this.renderChip('Large')}
          {this.renderChip('Extra Large')}
        </div>

        <h3>Filter Chips</h3>
        <h3 className='mdc-typography--body2'>No leading icon</h3>
        <div className='mdc-chip-set mdc-chip-set--filter' ref={initChipSet}>
          {this.renderFilterChip('Tops', 'mdc-chip--selected')}
          {this.renderFilterChip('Bottoms', 'mdc-chip--selected')}
          {this.renderFilterChip('Shoes')}
          {this.renderFilterChip('Accessories')}
        </div>
        <h3 className='mdc-typography--body2'>With leading icon</h3>
        <div className='mdc-chip-set mdc-chip-set--filter' ref={initChipSet}>
          {this.renderFilterChip('Alice',
            'mdc-chip--selected',
            this.renderIcon('face', 'mdc-chip__icon--leading mdc-chip__icon--leading-hidden'))}
          {this.renderFilterChip('Bob',
            '' /* classes */,
            this.renderIcon('face', 'mdc-chip__icon--leading'))}
          {this.renderFilterChip('Charlie',
            '' /* classes */,
            this.renderIcon('face', 'mdc-chip__icon--leading'))}
          {this.renderFilterChip('Danielle',
            '' /* classes */,
            this.renderIcon('face', 'mdc-chip__icon--leading'))}
        </div>

        <div className='catalog-variant'>
          <h3>Action Chips</h3>
          <div className='mdc-chip-set' ref={initChipSet}>
            {this.renderChip('Add to calendar',
              '' /* classes */,
              this.renderIcon('event', 'mdc-chip__icon--leading'))}
            {this.renderChip('Bookmark',
              '' /* classes */,
              this.renderIcon('bookmark', 'mdc-chip__icon--leading'))}
            {this.renderChip('Set alarm',
              '' /* classes */,
              this.renderIcon('alarm', 'mdc-chip__icon--leading'))}
            {this.renderChip('Get directions',
              '' /* classes */,
              this.renderIcon('directions', 'mdc-chip__icon--leading'))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChipsCatalog;
