import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCList} from '@material/list/index';
import {MDCRipple} from '@material/ripple';
import {MDCCheckbox} from '@material/checkbox/dist/mdc.checkbox';
import {MDCRadio} from '@material/radio';
import classnames from 'classnames';
import uuidv4 from 'uuid/v4';

import './styles/ListCatalog.scss';

const ListCatalog = () => (
  <ComponentCatalogPanel
    hero={<ListHero/>}
    title='List'
    description='Lists present multiple line items vertically as a single continuous element.'
    designLink='https://material.io/go/design-lists'
    docsLink='https://material.io/components/web/catalog/lists/'
    sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-list'
    demos={<ListDemos/>}
  />
);

export const ListHero = () => (
  <div className='hero-list'>
    <List>
      <ListItem lineOne='Line item' />
      <ListItem lineOne='Line item' />
      <ListItem lineOne='Line item' />
    </List>
  </div>
);

const ListDivider = () => (
  <li className='mdc-list-divider' role='separator'></li>
);

class ListItem extends Component {

  destroyableComponents = [];
  initRipple = (surface) => surface && this.destroyableComponents.push(new MDCRipple(surface));
  listItemId = uuidv4();

  componentWillUnmount() {
    this.destroyableComponents.forEach((component) => component.destroy());
  }

  renderLeadingIcon() {
    if (this.props.leadingIcon) {
      return (
        <span className='mdc-list-item__graphic material-icons' aria-hidden='true'>{this.props.leadingIcon}</span>
      );
    }
  }

  renderLines() {
    if (this.props.lineTwo) {
      return (
        <span className='mdc-list-item__text'>
          <span className='mdc-list-item__primary-text'>{this.props.lineOne}</span>
          <span className='mdc-list-item__secondary-text'>{this.props.lineTwo}</span>
        </span>
      );
    } else {
      return this.props.lineOne;
    }
  }

  renderTrailingIcon() {
    if (this.props.trailingIcon) {
      return (
        <span className='mdc-list-item__meta material-icons' aria-hidden='true'>{this.props.trailingIcon}</span>
      );
    }
  }

  renderTrailingCheckbox() {
    this.initCheckbox = checkboxEl => checkboxEl && this.destroyableComponents.push(new MDCCheckbox(checkboxEl));

    if (this.props.trailingCheckbox) {
      return (
          <div className='mdc-checkbox mdc-list-item__meta' ref={this.initCheckbox}>
            <input type='checkbox'
                   defaultChecked={false}
                   className='mdc-checkbox__native-control'
                   aria-labelledby={this.listItemId}/>
            <div className='mdc-checkbox__background'>
              <svg className='mdc-checkbox__checkmark'
                   viewBox='0 0 24 24'>
                <path className='mdc-checkbox__checkmark-path'
                      fill='none'
                      stroke='white'
                      d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
              </svg>
              <div className='mdc-checkbox__mixedmark'></div>
            </div>
            <div className='mdc-checkbox__ripple'></div>
          </div>
      )
    }
  }

  renderTrailingRadioButton() {
    this.initRadio = radioEl => radioEl && this.destroyableComponents.push(new MDCRadio(radioEl));

    if (this.props.trailingRadio) {
      return (
          <div className='mdc-radio mdc-list-item__meta' ref={this.initRadio}>
            <input className='mdc-radio__native-control'
                   type='radio'
                   name='listDemoRadioGroup'
                   defaultChecked='false'
                   aria-labelledby={this.listItemId} />
            <div className='mdc-radio__background'>
              <div className='mdc-radio__outer-circle'/>
              <div className='mdc-radio__inner-circle'/>
            </div>
            <div className='mdc-radio__ripple  '></div>
          </div>
      )
    }
  }

  render() {
    const {className, activated} = this.props;
    const classes = classnames('mdc-list-item', className, {'mdc-list-item--activated': activated});

    return (
      <li className={classes} ref={this.initRipple} tabIndex={this.props.tabIndex} id={this.listItemId} >
        {this.renderLeadingIcon()}
        {this.renderLines()}
        {this.renderTrailingIcon()}
        {this.renderTrailingCheckbox()}
        {this.renderTrailingRadioButton()}
      </li>
    );
  }
}

class List extends Component {
  list;
  initList = listEl => {
    if (listEl) {
      this.list = MDCList.attachTo(listEl);
    }
  };

  componentWillUnmount() {
    if (this.list) {
      this.list.destroy();
    }
  }

  render() {
    const classes = classnames('mdc-list demo-list', {
      'mdc-list--dense': this.props.dense,
      'mdc-list--two-line': this.props.twoLines,
      'mdc-list--avatar-list': this.props.avatars,
    }, this.props.className);
    return (
      <ul className={classes} ref={this.initList}>
        {this.props.children}
      </ul>
    );
  }
}

const ListVariant = (props) => (
  <div>
    <h3 className='mdc-typography--subtitle1'>{props.title}</h3>
    <List {...props} />
  </div>
);

const ListDemos = () => (
  <div>
    <ListVariant title='Single-Line'>
      <ListItem lineOne='Line item' tabIndex='0'/>
      <ListItem lineOne='Line item' />
      <ListItem lineOne='Line item' />
    </ListVariant>

    <ListVariant title='Two-Line' twoLines>
      <ListItem lineOne='Line item' lineTwo='Secondary text' tabIndex='0'/>
      <ListItem lineOne='Line item' lineTwo='Secondary text' />
      <ListItem lineOne='Line item' lineTwo='Secondary text' />
    </ListVariant>

    <ListVariant title='Leading Icon'>
      <ListItem lineOne='Line item' leadingIcon='wifi' tabIndex='0'/>
      <ListItem lineOne='Line item' leadingIcon='bluetooth' />
      <ListItem lineOne='Line item' leadingIcon='data_usage' />
    </ListVariant>

    <ListVariant title='List with activated item'>
      <ListItem lineOne='Inbox' leadingIcon='inbox' />
      <ListItem activated lineOne='Star' leadingIcon='star' />
      <ListItem lineOne='Send' leadingIcon='send' />
      <ListItem lineOne='Drafts' leadingIcon='drafts' />
    </ListVariant>

    <ListVariant title='List with shaped activated item' className='demo-list-item-shaped'>
      <ListItem lineOne='Inbox' leadingIcon='inbox' />
      <ListItem activated lineOne='Star' leadingIcon='star' />
      <ListItem lineOne='Send' leadingIcon='send' />
      <ListItem lineOne='Drafts' leadingIcon='drafts' />
    </ListVariant>

    <ListVariant title='Trailing Icon'>
      <ListItem lineOne='Line item' trailingIcon='info' tabIndex='0'/>
      <ListItem lineOne='Line item' trailingIcon='info' />
      <ListItem lineOne='Line item' trailingIcon='info' />
    </ListVariant>

    <ListVariant title='Two-Line with Leading and Trailing Icon and Divider' twoLines avatars>
      <ListItem lineOne='Dog Photos' lineTwo='9 Jan 2018' leadingIcon='folder' trailingIcon='info' tabIndex='0'/>
      <ListItem lineOne='Cat Photos' lineTwo='22 Dec 2017' leadingIcon='folder' trailingIcon='info' />
      <ListDivider />
      <ListItem lineOne='Potatoes' lineTwo='30 Noc 2017' leadingIcon='folder' trailingIcon='info' />
      <ListItem lineOne='Carrots' lineTwo='17 Oct 2017' leadingIcon='folder' trailingIcon='info' />
    </ListVariant>

    <ListVariant title='List with Trailing Checkbox' avatars>
      <ListItem lineOne='Dog Photos' trailingCheckbox tabIndex='0'/>
      <ListItem lineOne='Cat Photos' trailingCheckbox />
      <ListDivider />
      <ListItem lineOne='Potatoes' trailingCheckbox />
      <ListItem lineOne='Carrots'  trailingCheckbox />
    </ListVariant>

    <ListVariant title='List with Trailing Radio Buttons' avatars>
      <ListItem lineOne='Dog Photos' trailingRadio tabIndex='0'/>
      <ListItem lineOne='Cat Photos' trailingRadio />
      <ListDivider />
      <ListItem lineOne='Potatoes' trailingRadio />
      <ListItem lineOne='Carrots'  trailingRadio />
    </ListVariant>
  </div>
);

export default ListCatalog;
