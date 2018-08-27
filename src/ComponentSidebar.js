import React, {Component} from 'react';
import {MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation} from '@material/drawer';
import {MDCRipple} from '@material/ripple';

const SCREEN_WIDTH_BREAKPOINT = 799;
const PERSISTENT_DRAWER_CLASS = 'mdc-drawer--dismissable';
const TEMPORARY_DRAWER_CLASS = 'mdc-drawer--modal';

class ComponentSidebar extends Component {
  drawer = null;
  ripples = [];
  debounceTimeout = 0;

  initRipple = ele => ele && this.ripples.push(new MDCRipple(ele));
  handleDrawerOpen_ = () => this.handleDrawerOpen();
  handleDrawerClose_ = () => this.handleDrawerClose();

  initDrawer = ele => {
    if(!ele) return;
    this.drawerEl = ele;

    if(document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT) {
      this.drawerEl.classList.add(PERSISTENT_DRAWER_CLASS);
      this.drawer = new MDCDismissibleDrawerFoundation(ele);
    } else {
      this.drawerEl.classList.add(TEMPORARY_DRAWER_CLASS);
      this.drawer = new MDCModalDrawerFoundation(ele);
    }
  };

  componentDidMount() {
    this.drawerEl.addEventListener('MDCPersistentDrawer:open', this.handleDrawerOpen_);
    this.drawerEl.addEventListener('MDCPersistentDrawer:close', this.handleDrawerClose_);
    window.addEventListener('resize', this.debounceResizeMethod_);
  }

  componentWillUnmount() {
    if (this.drawerEl) {
      this.drawerEl.removeEventListener('MDCPersistentDrawer:open',
          this.handleDrawerOpen_);
      this.drawerEl.removeEventListener('MDCPErsistentDrawer:close',
          this.handleDrawerClose_);
    }
    if (this.drawer) {
      this.drawer.destroy();
    }
    window.removeEventListener('resize', this.debounceResizeMethod_);
    this.ripples.forEach(ripple => ripple.destroy());
  }

  componentWillReceiveProps(nextProps) {
    if(this.drawer) {
      if (this.props.isDrawerOpen !== nextProps.isDrawerOpen) {
        this.drawer.open = !this.drawer.open;
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
    const {match, history, location} = this.props;
    const path = link.url === '/' ? link.url : match.url + link.url;
    const className = path === location.pathname ? 'mdc-list-item' : 'mdc-list-item';
    return (
      <a
        onClick={(e) => this.handleListItemClick_(history, path, e)}
        key={index}
        role='listitem'
        className={className}
        ref={this.initRipple}
        tabIndex='0'
        >
        <span className={path === location.pathname ? 'sidebar-active' : ''}>
        {link.content}
      </span>
       </a>
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
      content: 'Icon Button',
      url: '/icon-button',
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
      content: 'Theme',
      url: '/theme',
    }, {
      content: 'Top App Bar',
      url: '/top-app-bar',
    }, {
      content: 'Typography',
      url: '/typography',
    }];

    return(
      <aside className='mdc-drawer demo-drawer' ref={this.initDrawer}>
        <nav className='mdc-drawer__drawer'>
          <nav className='mdc-drawer__content mdc-list-group'>
            {links.map((link, index) => this.renderSidebarLink(link, index))}
          </nav>
        </nav>
      </aside>
    );
  }

  handleResize_() {
    if (document.body.offsetWidth <= SCREEN_WIDTH_BREAKPOINT && this.drawer instanceof MDCDismissibleDrawerFoundation) {
      if (this.drawer.open) {
        this.drawer.open = false;
      }
      setTimeout(() => {
        this.drawer.destroy();
        this.drawerEl.classList.remove(PERSISTENT_DRAWER_CLASS);
        this.drawerEl.classList.add(TEMPORARY_DRAWER_CLASS);
        this.drawer = new MDCModalDrawerFoundation(this.drawerEl);
      }, 225)

    } else if(document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT && this.drawer instanceof MDCModalDrawerFoundation) {
      if (this.drawer.open) {
        this.drawer.open = false;
      }
      setTimeout(() => {
        this.drawer.destroy();
        this.drawerEl.classList.add(PERSISTENT_DRAWER_CLASS);
        this.drawerEl.classList.remove(TEMPORARY_DRAWER_CLASS);
        this.drawer = new MDCDismissibleDrawerFoundation(this.drawerEl);
      }, 225)
    }
  }

  debounceResizeMethod_ = () => {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() =>
        this.handleResize_(), 50)
  };

  handleListItemClick_ = (history, path, e) => {
    // Early return if the user clicks the link for the current route.
    if (this.props.location.pathname === path) return;
    history.push(path);
    e.preventDefault();

    if (this.drawer instanceof MDCModalDrawerFoundation && this.drawer.open) {
      this.drawer.open = false;
    }
  };
}


export default ComponentSidebar;
