import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCChipSet} from '@material/chips';

import './styles/ChipsPage.scss';

const ChipsPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<ChipsHero/>}
        title='Chips'
        description='Chipss communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
        designLink='https://material.io/guidelines/components/buttons.html'
        docsLink='https://material.io/components/web/catalog/buttons/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
        demos={<ChipsDemos/>}
      />
    </div>
  );
}

class ChipsHero extends Component {
  constructor(props) {
    super(props);
    this.chipSets = [];
    this.initChipSet = chipSetEl => this.chipSets.push(new MDCChipSet(chipSetEl));
  }

  componentWillUnmount() {
    this.chipSets.forEach(chipSet => chipSet.destroy());
  }

  render() {
    return (
      <div className='mdc-chip-set' ref={this.initChipSet}>
        <div className='mdc-chip' tabindex='0'>
          <div className='mdc-chip__text'>Chip One</div>
        </div>
        <div className='mdc-chip' tabindex='0'>
          <div className='mdc-chip__text'>Chip Two</div>
        </div>
        <div className='mdc-chip' tabindex='0'>
          <div className='mdc-chip__text'>Chip Three</div>
        </div>
        <div className='mdc-chip' tabindex='0'>
          <div className='mdc-chip__text'>Chip Four</div>
        </div>
      </div>
    );
  }
}

class ChipsDemos extends Component {
  constructor(props) {
    super(props);
    this.chipSets = [];
    this.initChipSet = chipSetEl => this.chipSets.push(new MDCChipSet(chipSetEl));
  }

  componentWillUnmount() {
    this.chipSets.forEach(chipSet => chipSet.destroy());
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

  renderFilterLeadingIcon() {
    return (
      <i className='material-icons mdc-chip__icon mdc-chip__icon--leading'>
        face
      </i>
    );
  }

  renderFilterHiddenLeadingIcon() {
    return (
      <i className='material-icons mdc-chip__icon mdc-chip__icon--leading mdc-chip__icon--leading-hidden'>
        face
      </i>
    );
  }

  renderChip(text, classes, leadingIcon, trailingIcon, isFilter) {
    return (
      <div className={`mdc-chip ${classes}`} tabindex='0'>
        {leadingIcon}
        {isFilter ? this.renderFilterCheckmark() : ''}
        <div className='mdc-chip__text'>{text}</div>
        {trailingIcon}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Input Chips</h3>
          <div className='mdc-chip-set mdc-chip-set--input' ref={this.initChipSet}>
            {this.renderChip('Jane Doe')}
            {this.renderChip('John Smith')}
          </div>
        </div>

        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Choice Chips</h3>
          <div className='mdc-chip-set mdc-chip-set--choice' ref={this.initChipSet}>
            {this.renderChip('Extra Small')}
            {this.renderChip('Small')}
            {this.renderChip('Medium')}
            {this.renderChip('Large')}
            {this.renderChip('Extra Large')}
          </div>
        </div>

        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Filter Chips</h3>
          <h3 className='mdc-typography--subtitle2'>No leading icon</h3>
          <div className='mdc-chip-set mdc-chip-set--filter' ref={this.initChipSet}>
            {this.renderChip('Tops', 'mdc-chip--selected', undefined, undefined, true)}
            {this.renderChip('Bottoms', 'mdc-chip--selected', undefined, undefined, true)}
            {this.renderChip('Shoes', '', undefined, undefined, true)}
            {this.renderChip('Accessories', '', undefined, undefined, true)}
          </div>
          <h3 className='mdc-typography--subtitle2'>With leading icon</h3>
          <div className='mdc-chip-set mdc-chip-set--filter' ref={this.initChipSet}>
            {this.renderChip('Alice', 'mdc-chip--selected', this.renderFilterHiddenLeadingIcon(), undefined, true)}
            {this.renderChip('Bob', '', this.renderFilterLeadingIcon(), undefined, true)}
            {this.renderChip('Charlie', '', this.renderFilterLeadingIcon(), undefined, true)}
            {this.renderChip('David', '', this.renderFilterLeadingIcon(), undefined, true)}
          </div>
        </div>

        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Action Chips</h3>
          <div className='mdc-chip-set' ref={this.initChipSet}>
            {this.renderChip('Add to calendar')}
            {this.renderChip('Bookmark')}
            {this.renderChip('Set alarm')}
            {this.renderChip('Get directions')}
          </div>
        </div>
      </div>
    );
  }
}

export default ChipsPage;
