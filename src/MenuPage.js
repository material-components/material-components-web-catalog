import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCMenu} from '@material/menu';

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
    <div className='mdc-menu mdc-menu--open' tabIndex='0'>
      <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
        <li className='mdc-list-item' role='menuitem' tabIndex='0'>
          A Menu Item
        </li>
        <li className='mdc-list-item' role='menuitem' tabIndex='0'>
          Another Menu Item
        </li>
      </ul>
    </div>
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
    this.props.handleSelected(evt.detail);
  }

  handleCancel() {
    this.props.handleCancel();
  }

  render() {
    return (
      <div className='mdc-menu' tabIndex='-1' ref={this.initMenu}>
        <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const MenuItem = (props) => {
  return (
    <li className='mdc-list-item' role='menuitem' tabIndex='0'>{props.name}</li>
  );
};

const MenuDivider = () => {
  return (
    <li className='mdc-list-divider' role='separator'></li>
  )
}

export default MenuPage;
