import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCRipple} from '@material/ripple';

import './styles/ListPage.scss';

const ListPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<ListHero/>}
        title='List'
        description='Lists present multiple line items vertically as a single continuous element.'
        designLink='https://material.io/guidelines/components/lists.html'
        docsLink='https://material.io/components/web/catalog/lists/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-list'
        demos={<ListDemos/>}
      />
    </div>
  );
}

class ListHero extends Component {
  render() {
    return (
      <div className='hero-list'>
        <List>
          <ListItem lineOne='Line item' />
          <ListItem lineOne='Line item' />
          <ListItem lineOne='Line item' />
        </List>
      </div>
    )
  }
}

class ListDivider extends Component {
  render() {
    return (
      <li className='mdc-list-divider' role='separator'></li>
    )
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.ripple = null;
    this.initRipple = (surface) => this.ripple = new MDCRipple(surface);
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  renderLeadingIcon() {
    if (this.props.leadingIcon) {
      return (
        <span className='mdc-list-item__graphic material-icons' aria-hidden='true'>{this.props.leadingIcon}</span>
      )
    }
  }

  renderLineTwo() {
    if (this.props.lineTwo) {
      return (
        <span className='mdc-list-item__secondary-text'>{this.props.lineTwo}</span>
      )
    }
  }

  renderTrailingIcon() {
    if (this.props.trailingIcon) {
      return (
        <span className='mdc-list-item__meta material-icons' aria-hidden='true'>{this.props.trailingIcon}</span>
      )
    }
  }

  render() {
    return (
      <li className='mdc-list-item' ref={this.initRipple}>
        {this.renderLeadingIcon()}
        <span className='mdc-list-item__text'>
          {this.props.lineOne}
          {this.renderLineTwo()}
        </span>
        {this.renderTrailingIcon()}
      </li>
    );
  }
}

class List extends Component {
  render() {
    return (
      <ul className={`mdc-list demo-list
                      ${this.props.dense && 'mdc-list--dense'}
                      ${this.props.twoLines && 'mdc-list--two-line'}
                      ${this.props.avatars && 'mdc-list--avatar-list'}`}>
        {this.props.children}
      </ul>
    );
  }
}

class ListVariant extends Component {
  render() {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>{this.props.title}</h3>
        <List {...this.props} />
      </div>
    )
  }
}

class ListDemos extends Component {
  render() {
    return (
      <div>
        <ListVariant title='Single-Line'>
          <ListItem lineOne='Line item' />
          <ListItem lineOne='Line item' />
          <ListItem lineOne='Line item' />
        </ListVariant>

        <ListVariant title='Two-Line' twoLines>
          <ListItem lineOne='Line item' lineTwo='Secondary text' />
          <ListItem lineOne='Line item' lineTwo='Secondary text' />
          <ListItem lineOne='Line item' lineTwo='Secondary text' />
        </ListVariant>

        <ListVariant title='Leading Icon'>
          <ListItem lineOne='Line item' leadingIcon='wifi' />
          <ListItem lineOne='Line item' leadingIcon='bluetooth' />
          <ListItem lineOne='Line item' leadingIcon='data_usage' />
        </ListVariant>

        <ListVariant title='Trailing Icon'>
          <ListItem lineOne='Line item' trailingIcon='info' />
          <ListItem lineOne='Line item' trailingIcon='info' />
          <ListItem lineOne='Line item' trailingIcon='info' />
        </ListVariant>

        <ListVariant title='Two-Line with Leading and Trailing Icon and Divider' twoLines avatars>
          <ListItem lineOne='Dog Photos' lineTwo='9 Jan 2018' leadingIcon='folder' trailingIcon='info' />
          <ListItem lineOne='Cat Photos' lineTwo='22 Dec 2017' leadingIcon='folder' trailingIcon='info' />
          <ListDivider />
          <ListItem lineOne='Potatoes' lineTwo='30 Noc 2017' leadingIcon='folder' trailingIcon='info' />
          <ListItem lineOne='Carrots' lineTwo='17 Oct 2017' leadingIcon='folder' trailingIcon='info' />
        </ListVariant>
      </div>
    )
  }
}

export default ListPage;
