import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {MDCPersistentDrawer} from '@material/drawer';

class ComponentSidebar extends Component {
  drawer = null;
  initDrawer = ele => {
    if(!ele) return;
    this.drawer = new MDCPersistentDrawer(ele);
  };

  componentWillReceiveProps(nextProps) {
    if(this.drawer) {
      if (this.props.isDrawerOpen !== nextProps.isDrawerOpen) {
        this.drawer.open = !this.drawer.open;
      }
    }
  }

  renderSidebarLink(link, index) {
    const {match} = this.props;
    const path = link.url === '/' ? link.url : match.url + link.url;
    return (
      <NavLink
        to={`${path}`}
        key={index}
        role='listitem'
        activeClassName='sidebar-active'
        className='mdc-list-item'>
          {link.content}
       </NavLink>
    );
  }

  render() {
    const links = [{
      content: 'Home',
      url: '/',
    }, {
      content: 'Button',
      url: '/button',
    }, {
      content: 'Card',
      url: '/card',
    }, {
      content: 'Checkbox',
      url: '/checkbox',
    }, {
      content: 'Chips',
      url: '/chips',
    }, {
      content: 'Dialog',
      url: '/dialog',
    }, {
      content: 'Drawer',
      url: '/drawer',
    }, {
      content: 'Elevation',
      url: '/elevation',
    }, {
      content: 'FAB',
      url: '/fab',
    }, {
      content: 'Icon Toggle',
      url: '/icon-toggle',
    }, {
      content: 'Image List',
      url: '/image-list',
    }, {
      content: 'Layout Grid',
      url: '/layout-grid',
    }, {
      content: 'Linear Progress Indicator',
      url: '/linear-progress-indicator',
    }, {
      content: 'List',
      url: '/list',
    }, {
      content: 'Menu',
      url: '/menu',
    }, {
      content: 'Radio Button',
      url: '/radio',
    }, {
      content: 'Ripple',
      url: '/ripple',
    }, {
      content: 'Select',
      url: '/select',
    }, {
      content: 'Shape',
      url: '/shape',
    }, {
      content: 'Slider',
      url: '/slider',
    }, {
      content: 'Snackbar',
      url: '/snackbar',
    }, {
      content: 'Switch',
      url: '/switch',
    }, {
      content: 'Tabs',
      url: '/tabs',
    }, {
      content: 'Text Field',
      url: '/text-field',
    }, {
      content: 'Top App Bar',
      url: '/top-app-bar',
    }, {
      content: 'Typography',
      url: '/typography',
    }];

    return(
        <aside className='mdc-drawer mdc-drawer--persistent demo-drawer' ref={this.initDrawer}>
          <nav className='mdc-drawer__drawer'>
            <nav className='mdc-drawer__content mdc-list-group'>
              {links.map((link, index) => this.renderSidebarLink(link, index))}
            </nav>
          </nav>
        </aside>
    );
  }
}


export default ComponentSidebar;
