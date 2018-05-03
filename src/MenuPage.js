import React, {Component} from 'react';
import classnames from 'classnames';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCMenu} from '@material/menu';
import {MDCRipple} from '@material/ripple';

import './styles/MenuPage.scss';

const MenuPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<MenuHero />}
        title='Menu'
        description='Menus display a list of choices on a transient sheet of material.'
        designLink='https://material.io/guidelines/components/menus.html'
        docsLink='https://material.io/components/web/catalog/menus/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu'
        demos={<MenuDemos />}
      />
    </div>
  )
};

const MenuHero = () => {
  return (
    <MenuDOM defaultOpen className='hero-menu'>
      <MenuItem name='A Menu Item' />
      <MenuItem name='Another Menu Item' />
    </MenuDOM>
  );
};

class MenuDemos extends Component {
  state = {open: false, focusIndex: undefined};

  handleSelected_ = (detail) => this.handleSelected(detail);
  handleCancel_ = () => this.handleCancel();
  handleOpenClick_ = () => this.handleOpenClick();

  handleSelected(detail) {
    this.setState({open: false, focusIndex: detail.index});
  }

  handleCancel() {
    this.setState({open: false});
  }

  handleOpenClick() {
    this.setState({open: true});
  }

  render() {
    return (
      <div>
        <h3 className='mdc-typography--subheading2'>Anchored Menu</h3>
        <button className='mdc-button' onClick={this.handleOpenClick_}>Open menu</button>
        <div className='mdc-menu-anchor'>
          <Menu open={this.state.open} focusIndex={this.state.focusIndex} handleSelected={this.handleSelected_} handleCancel={this.handleCancel_}>
            <MenuItem name='Passionfruit' />
            <MenuItem name='Orange' />
            <MenuItem name='Guava' />
            <MenuItem name='Pitaya' />
            <MenuDivider />
            <MenuItem name='Pineapple' />
            <MenuItem name='Mango' />
            <MenuItem name='Papaya' />
            <MenuItem name='Lychee' />
          </Menu>
        </div>
      </div>
    )
  }
};

class Menu extends Component {
  initMenu = (menuEl) => {
    this.menuEl = menuEl;
    this.menu = new MDCMenu(menuEl);
  };

  handleSelected_ = (evt) => this.handleSelected(evt);
  handleCancel_ = () => this.handleCancel();

  componentDidMount() {
    this.menuEl.addEventListener('MDCMenu:selected', this.handleSelected_);
    this.menuEl.addEventListener('MDCMenu:cancel', this.handleCancel_);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.props.open
        ? this.menu.show({focusIndex: this.props.focusIndex})
        : this.menu.hide();
    }
  }

  componentWillUnmount() {
    this.menuEl.removeEventListener('MDCMenu:selected', this.handleSelected_);
    this.menuEl.removeEventListener('MDCMenu:cancel', this.handleCancel_);
    this.menu.destroy();
  }

  handleSelected(evt) {
    if (this.props.handleSelected) {
      this.props.handleSelected(evt.detail);
    }
  }

  handleCancel() {
    if (this.props.handleCancel) {
      this.props.handleCancel();
    }
  }

  render() {
    const classes = classnames('mdc-menu', {
      'mdc-menu--open': this.props.defaultOpen,
    }, this.props.className);

    return (
      <div className={classes} tabIndex={this.props.open ? 0 : -1} ref={this.initMenu}>
        <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const MenuDOM = (props) => {
  const classes = classnames('mdc-menu', {
    'mdc-menu--open': props.defaultOpen,
  }, props.className);

  return (
    <div className={classes} tabIndex={props.open ? 0 : -1} >
      <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
        {props.children}
      </ul>
    </div>
  );
};

class MenuItem extends Component {
  initRipple = (rippleEl) => this.ripple = new MDCRipple(rippleEl);

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
      <li className='mdc-list-item' role='menuitem' tabIndex='0' ref={this.initRipple}>{this.props.name}</li>
    );
  }
};

const MenuDivider = () => {
  return (
    <li className='mdc-list-divider' role='separator'></li>
  )
}

export default MenuPage;
