import React, {Component} from 'react';

import './styles/ComponentPage.scss';
import {imagePath} from './constants';

const pageExt = process.env.MDC_NO_JEKYLL ? '.html' : '';

class ComponentPage extends Component {
  renderSidebarLink(link, index) {
    return (
      <a
        href={`${process.env.PUBLIC_URL}${link.url}${pageExt}`}
        key={index}
        role='listitem'
        className={`mdc-list-item ${link.active ? 'sidebar-active' : ''}`}>
          {link.content}
       </a>
    );
  }

  renderSidebar(activeLink) {
    const links = [{
      content: 'Button',
      url: '/button',
      active: activeLink === 'Button',
    }, {
      content: 'Card',
      url: '/card',
      active: activeLink === 'Card',
    }, {
      content: 'Checkbox',
      url: '/checkbox',
      active: activeLink === 'Checkbox',
    }, {
      content: 'Dialog',
      url: '/dialog',
      active: activeLink === 'Dialog',
    }, {
      content: 'Drawer',
      url: '/drawer',
      active: activeLink === 'Drawer',
    }, {
      content: 'Elevation',
      url: '/elevation',
      active: activeLink === 'Elevation',
    }, {
      content: 'Fab',
      url: '/fab',
      active: activeLink === 'Floating Action Button',
    }, {
      content: 'Icon Toggle',
      url: '/icon-toggle',
      active: activeLink === 'Icon Toggle',
    }, {
      content: 'Image List',
      url: '/image-list',
      active: activeLink === 'Image List',
    }, {
      content: 'Linear Progress Indicator',
      url: '/linear-progress-indicator',
      active: activeLink === 'Linear Progress Indicator',
    }, {
      content: 'List',
      url: '/list',
      active: activeLink === 'List',
    }, {
      content: 'Menu',
      url: '/menu',
      active: activeLink === 'Menu',
    }, {
      content: 'Ripple',
      url: '/ripple',
      active: activeLink === 'Ripple',
    }, {
      content: 'Select',
      url: '/select',
      active: activeLink === 'Select',
    }, {
      content: 'Slider',
      url: '/slider',
      active: activeLink === 'Slider',
    }, {
      content: 'Switch',
      url: '/switch',
      active: activeLink === 'Switch',
    }, {
      content: 'Text Field',
      url: '/text-field',
      active: activeLink === 'Text Field',
    }, {
      content: 'Top App Bar',
      url: '/top-app-bar',
      active: activeLink === 'Top App Bar',
    }];

    const styles = [{
      content: 'Typography',
      url: '/typography',
      active: activeLink === 'Typography',
    }];

    return(
      <section className='sidebar mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
        {links.map(this.renderSidebarLink)}
        <div className='mdc-list-divider' role='separator'></div>
        {styles.map(this.renderSidebarLink)}
      </section>
    );
  }

  renderResource(title, imageSource, url) {
    return (
      <a href={url} role='listitem' className='mdc-list-item' target='_blank'>
        <span className='mdc-list-item__graphic'>
          <img src={imageSource} className='resources-icon' alt={`${title} icon`}/>
        </span>
        <span className='mdc-list-item__text'>{title}</span>
      </a>
    );
  }

  renderDemoWrapper() {
    return(
      <section className='demo-wrapper mdc-layout-grid__cell mdc-layout-grid__cell--span-10'>
        <h1 className='mdc-typography--headline'>{this.props.title}</h1>
        <p className='mdc-typography--body1'>{this.props.description}</p>
        <div className='hero'>
          {this.props.hero}
        </div>
        <h2 className='demo-title mdc-typography--title'>Resources</h2>
        {this.renderResource('Material Design Guidelines', `${imagePath}/ic_material_design_24px.svg`, this.props.designLink)}
        {this.renderResource('Documentation', `${imagePath}/ic_drive_document_24px.svg`, this.props.docsLink)}
        {this.renderResource('Source Code', `${imagePath}/ic_code_24px.svg`, this.props.sourceLink)}

        <h2 className='demo-title mdc-typography--title'>Demos</h2>
        {this.props.demos}
      </section>
    );
  }

  render() {
    return (
      <div className='mdc-top-app-bar--fixed-adjust'>
        <div className='mdc-layout-grid'>
          <div className='mdc-layout-grid__inner'>
            {this.renderSidebar(this.props.title)}
            {this.renderDemoWrapper()}
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
