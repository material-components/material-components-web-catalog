import React, {Component} from 'react';
import classnames from 'classnames';
import {MDCDrawer} from '@material/drawer/index';
import {MDCRipple} from '@material/ripple/index';
import {imagePath} from './constants';

const SCREEN_WIDTH_BREAKPOINT = 1490;
const DISMISSIBLE_DRAWER_CLASS = 'mdc-drawer--dismissible';
const MODAL_DRAWER_CLASS = 'mdc-drawer--modal';

class ComponentSidebar extends Component {
  state = {
    variant: document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT ? DISMISSIBLE_DRAWER_CLASS : MODAL_DRAWER_CLASS,
  };

  drawer = null;
  ripples = [];
  debounceTimeout = 0;

  initRipple = ele => ele && this.ripples.push(new MDCRipple(ele));
  handleDrawerOpen_ = () => this.handleDrawerOpen();
  handleDrawerClose_ = () => this.handleDrawerClose();

  initDrawer = ele => {
    if (!ele) {
      return;
    }
    this.drawerEl = ele;

    if (this.drawer) {
      this.drawer.destroy();
    }
    this.drawer = new MDCDrawer(this.drawerEl);
  };

  componentDidMount() {
    this.drawerEl.addEventListener('MDCDrawer:opened', this.handleDrawerOpen_);
    this.drawerEl.addEventListener('MDCDrawer:closed', this.handleDrawerClose_);
    window.addEventListener('resize', this.debounceResizeMethod_);
  }

  componentWillUnmount() {
    if (this.drawerEl) {
      this.drawerEl.removeEventListener('MDCDrawer:opened',
          this.handleDrawerOpen_);
      this.drawerEl.removeEventListener('MDCDrawer:closed',
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
    return this.drawerEl.getBoundingClientRect().width;
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
    const classes = classnames('mdc-list-item', {
          'mdc-list-item--activated': this.state.activeItemIndex === index || path === location.pathname,
        });
    return (
      <a
        onClick={(e) => this.handleListItemClick_(history, path, e)}
        onKeyDown={(e) => this.handleListItemKeyDown_(history, path, e)}
        key={index}
        role='listitem'
        className={classes}
        ref={this.initRipple}
        >
        {link.content}
      </a>
    );
  }

  renderScrim() {
    return (
      <div className='mdc-drawer-scrim'></div>
    );
  }

  render() {
    if (this.state.variant === MODAL_DRAWER_CLASS) {
      return (
        <div>
          {this.renderDrawer()}
          {this.renderScrim()}
        </div>
      );
    } else {
      return this.renderDrawer();
    }
  }

  renderDrawer() {
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
      content: 'Data Table',
      url: '/data-table',
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
      content: 'Slider',
      url: '/slider',
    }, {
      content: 'Snackbar',
      url: '/snackbar',
    }, {
      content: 'Switch',
      url: '/switch',
    }, {
      content: 'Tab Bar',
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

    const classes = `mdc-drawer ${this.state.variant} demo-drawer mdc-top-app-bar--fixed-adjust`;
    const imageSource = `${imagePath}/ic_material_design_24px.svg`;

    return (
      <aside id='demo-drawer' className={classes} ref={this.initDrawer}>
        <div className='mdc-drawer__header demo-drawer-header'>
          <img src={imageSource} className='resources-icon' alt='Material Design Guidelines icon'></img>
        </div>
        <div className='mdc-drawer__content'>
          <nav className='mdc-list'>
            {links.map((link, index) => this.renderSidebarLink(link, index))}
          </nav>
        </div>
      </aside>
    );
  }

  handleResize_() {
    if (document.body.offsetWidth <= SCREEN_WIDTH_BREAKPOINT &&
        this.state.variant === DISMISSIBLE_DRAWER_CLASS) {
      if (this.drawer.open) {
        this.drawer.open = false;
      }
      setTimeout(() => {
        this.setState({variant: MODAL_DRAWER_CLASS});
      }, 225);
    } else if(document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT &&
        this.state.variant === MODAL_DRAWER_CLASS) {
      if (this.drawer.open) {
        this.drawer.open = false;
      }
      setTimeout(() => {
        this.setState({variant: DISMISSIBLE_DRAWER_CLASS});
      }, 225);
    }
  }

  debounceResizeMethod_ = () => {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => this.handleResize_(), 50);
  };

  handleListItemKeyDown_ = (history, path, e) => {
    if (e.keyCode === /** ENTER */ 13 || e.keyCode === /** SPACE */ 32) {
      this.handleListItemClick_(history, path, e);
    }
  };

  handleListItemClick_ = (history, path, e) => {
    // Early return if the user clicks the link for the current route.
    if (this.props.location.pathname === path) return;
    history.push(path);
    e.preventDefault();
    this.setState({activeItemIndex: e.target.getAttribute('key')});

    if (this.state.variant === MODAL_DRAWER_CLASS && this.drawer.open) {
      this.drawer.open = false;
    }
  };
}


export default ComponentSidebar;
