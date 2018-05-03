import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class ComponentSidebar extends Component {

  renderSidebarLink(link, index) {
    const {match} = this.props;
    return (
      <NavLink
        to={`${match.url}${link.url}`}
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
      content: 'Button',
      url: '/button',
    }, {
      content: 'Card',
      url: '/card',
    }, {
      content: 'Checkbox',
      url: '/checkbox',
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
      content: 'Slider',
      url: '/slider',
    }, {
      content: 'Select',
      url: '/select',
    }, {
      content: 'Switch',
      url: '/switch',
    }, {
      content: 'Text Field',
      url: '/text-field',
    }, {
      content: 'Top App Bar',
      url: '/top-app-bar',
    }];

    return(
      <section className='sidebar mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
        {links.map((link, index) => this.renderSidebarLink(link, index))}
      </section>
    );
  }
}


export default ComponentSidebar;
