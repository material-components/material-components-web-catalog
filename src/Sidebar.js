import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {

  renderSidebarLink(link, index) {
    const {match} = this.props;
    return (
      <NavLink
        to={`${process.env.PUBLIC_URL}${match.url}${link.url}`}
        key={index}
        role='listitem'
        activeClassName='sidebar-active'
        className='mdc-list-item'>
          {link.content}
       </NavLink>
    );
  }

  render() {
    const {activeLink} = this.props;
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
      content: 'Fab',
      url: '/fab',
    }, {
      content: 'Image List',
      url: '/image-list',
    }, {
      content: 'List',
      url: '/list',
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


export default Sidebar;
