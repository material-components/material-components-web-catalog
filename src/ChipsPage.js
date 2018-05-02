import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCChipSet, MDCChip} from '@material/chips';

import './styles/ChipsPage.scss';

const ChipsPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<ChipsHero/>}
        title='Chips'
        description='Chips communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.'
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
    this.chipSet = null;
    this.initChipSet = chipSetEl => this.chipSet = new MDCChipSet(chipSetEl);
  }

  componentWillUnmount() {
    this.chipSet.destroy();
  }

  render() {
    return (
      <div className='mdc-chip-set' ref={this.initChipSet}>
        <div className='mdc-chip' tabIndex='0'>
          <div className='mdc-chip__text'>Chip One</div>
        </div>
        <div className='mdc-chip' tabIndex='0'>
          <div className='mdc-chip__text'>Chip Two</div>
        </div>
        <div className='mdc-chip' tabIndex='0'>
          <div className='mdc-chip__text'>Chip Three</div>
        </div>
        <div className='mdc-chip' tabIndex='0'>
          <div className='mdc-chip__text'>Chip Four</div>
        </div>
      </div>
    );
  }
}

class CatalogChip extends MDCChip {
  constructor(...args) {
    super(...args);
  }

  remove() {
    this.destroy();
  }
}

class InputChipSet extends Component {
  constructor(props) {
    super(props);
    this.chipSetEl = null;
    this.chipSet = null;
    this.chipSetInputEl = null;
    this.removalChipIndex = 0;
    this.inputValue = '';
    this.state = {
      chipNames: ['Jane Smith', 'John Doe']
    };

    this.init = chipSetEl => {
      this.chipSetEl = chipSetEl;
      this.initChipSet();
    };
    this.setInput = inputEl => this.chipSetInputEl = inputEl;
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveChip = this.handleRemoveChip.bind(this);
    this.handleTrailingIconInteraction = this.handleTrailingIconInteraction.bind(this);
  }

  componentDidMount() {
    this.chipSetEl.addEventListener('MDCChip:removal', this.handleRemoveChip);
    this.chipSetEl.addEventListener('MDCChip:trailingIconInteraction', this.handleTrailingIconInteraction);
  }

  componentWillUnmount() {
    this.chipSetEl.removeEventListener('MDCChip:removal', this.handleRemoveChip);
    this.chipSetEl.removeEventListener('MDCChip:trailingIconInteraction', this.handleTrailingIconInteraction);
  }

  initChipSet() {
    if (this.chipSet) {
      this.chipSet.destroy();
    }
    this.chipSet = new MDCChipSet(this.chipSetEl, undefined, (el) => new CatalogChip(el));
  }

  handleInputKeyDown(e) {
    if ((e.key === 'Enter' || e.keyCode === 13) || (e.key === 'Tab' || e.keyCode === 9)
      && this.chipSetInputEl.value !== '') {
        e.preventDefault();
        this.addInputChip();
    } else if ((e.key === 'Backspace' || e.keyCode === 8)&& this.chipSetInputEl.value === '') {
      this.removeLastChip();
    }
  }

  handleTrailingIconInteraction(e) {
    const {chip} = e.detail;
    this.removalChipIndex = this.chipSet.chips.indexOf(chip);
  }

  handleRemoveChip(e) {
    // This assumes that the chip names in the state and the chip objects in the chip set have the same array order.
    const newChipNames = [].concat(
      this.state.chipNames.slice(0, this.removalChipIndex),
      this.state.chipNames.slice(this.removalChipIndex + 1));
    console.log(newChipNames);
    this.setState({chipNames: newChipNames}, () => {
      this.initChipSet();
    });
  }

  // Due to the way React handles the DOM, we need to implement a different way of adding/removing
  // chips. These addChip/removeChip functions replace the addChip method in MDCChipSet and the
  // appendChip/removeChip methods in its adapter.
  // In a production app, it is expected for the user to wrap the MDCChip and MDCChipSet foundation
  // and adapter. See: https://material.io/components/web/docs/framework-integration/

  addInputChip() {
    this.inputValue = this.chipSetInputEl.value;
    const newChipNames = [].concat(this.state.chipNames, [this.inputValue]);
    this.setState({chipNames: newChipNames}, () => {
      this.initChipSet();
    });
    this.chipSetInputEl.value = '';
  }

  removeLastChip() {
    const chip = this.chipSet.chips.pop();
    chip.destroy();
  
    const newChipNames = this.state.chipNames.slice(0, -1);
    this.setState({chipNames: newChipNames}, () => {
      this.initChipSet();
    });
  }

  renderChip(name, index) {
    return (
      <div className={'mdc-chip'} key={index} tabIndex='0'>
        <i className={'material-icons mdc-chip__icon mdc-chip__icon--leading'}>face</i>
        <div className='mdc-chip__text'>{name}</div>
        <i className={'material-icons mdc-chip__icon mdc-chip__icon--trailing'}>cancel</i>
      </div>
    );
  }

  render() {
    return (
      <div className='catalog-input-chips'>
        <div className='mdc-chip-set mdc-chip-set--input' ref={this.init}>
          {this.state.chipNames.map(this.renderChip)}
          <input className='catalog-input' onKeyDown={this.handleInputKeyDown} ref={this.setInput} />
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

  renderIcon(name, classes, isTrailing) {
    return (
      <i className={`material-icons mdc-chip__icon ${classes}`}>
        {name}
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
      <div className={`mdc-chip ${classes}`} tabIndex='0'>
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
          <InputChipSet />
        </div>

        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Choice Chips</h3>
          <div className='mdc-chip-set mdc-chip-set--choice' ref={this.initChipSet}>
            {this.renderChip('Extra Small')}
            {this.renderChip('Small')}
            {this.renderChip('Medium', 'mdc-chip--selected')}
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
            {this.renderChip('Alice',
              'mdc-chip--selected',
              this.renderIcon('face', 'mdc-chip__icon--leading mdc-chip__icon--leading-hidden'),
              undefined,
              true)}
            {this.renderChip('Bob',
              '',
              this.renderIcon('face', 'mdc-chip__icon--leading'),
              undefined,
              true)}
            {this.renderChip('Charlie',
              '',
              this.renderIcon('face', 'mdc-chip__icon--leading'),
              undefined,
              true)}
            {this.renderChip('Danielle',
              '',
              this.renderIcon('face', 'mdc-chip__icon--leading'),
              undefined,
              true)}
          </div>
        </div>

        <div className='catalog-variant'>
          <h3 className='mdc-typography--headline6'>Action Chips</h3>
          <div className='mdc-chip-set' ref={this.initChipSet}>
            {this.renderChip('Add to calendar', '', this.renderIcon('event', 'mdc-chip__icon--leading'))}
            {this.renderChip('Bookmark', '', this.renderIcon('bookmark', 'mdc-chip__icon--leading'))}
            {this.renderChip('Set alarm', '', this.renderIcon('alarm', 'mdc-chip__icon--leading'))}
            {this.renderChip('Get directions', '', this.renderIcon('directions', 'mdc-chip__icon--leading'))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChipsPage;
