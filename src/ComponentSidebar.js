import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {MDCPersistentDrawer} from '@material/drawer';

class ComponentSidebar extends Component {
  drawer = null;
  initDrawer = ele => {
    if(!ele) return;
    this.drawer = new MDCPersistentDrawer(ele);
    this.drawerEl = ele;
  };

  handleDrawerOpen_ = () => this.handleDrawerOpen();
  handleDrawerClose_ = () => this.handleDrawerClose();

  componentDidMount() {
    this.drawerEl.addEventListener('MDCPersistentDrawer:open', this.handleDrawerOpen_);
    this.drawerEl.addEventListener('MDCPersistentDrawer:close', this.handleDrawerClose_);
  }

  componentWillReceiveProps(nextProps) {
    if(this.drawer) {
      if (this.props.isDrawerOpen !== nextProps.isDrawerOpen) {
        this.drawer.open = nextProps.isDrawerOpen;
      }
    }
  }

  computeDrawerWidth() {
    return this.drawer.drawer.offsetWidth;
  }

  handleDrawerOpen() {
    if (!this.props.handleOpen) return;
    this.props.handleOpen(this.computeDrawerWidth());
  }

  handleDrawerClose() {
    if (!this.props.handleClose) return;
    this.props.handleClose(this.computeDrawerWidth());
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
