import React, { Component } from 'react';

import './ComponentPage.scss'

class ComponentPage extends Component {
  renderSidebarLink(link, index) {
    return (
      <a
        href={link.url}
        key={index}
        role='listitem'     
        className={`mdc-list-item ${link.className} ${link.active ? 'sidebar-active' : ''}`}>
          {link.content}
       </a>
    );
  }

  renderSidebar(activeLink) {
    const links = [{
      content: 'Buttons',
      url: '/buttons.html',
      className: 'sidebar-buttons',
      active: activeLink === 'Buttons',
    }, {
      content: 'Cards',
      url: '/card.html',
      className: 'sidebar-cards',
      active: activeLink === 'Cards',
    }];

    return(
      <section className='sidebar mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
        {links.map(this.renderSidebarLink)}
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

        <h2 className='mdc-typography--title'>Resources</h2>
        {this.renderResource('Material Design Guidelines', 'material_design_black_24dp.png', this.props.designLink)}
        {this.renderResource('Documentation', 'drive_document_black_24dp.png', this.props.docsLink)}
        {this.renderResource('Source Code', 'code_black_24dp.png', this.props.sourceLink)}

        <h2 className='mdc-typography--title'>Demos</h2>
        {this.props.demos}
      </section>
    );
  }

  render() {
    return (
      <div>
        <section className='hero'>
          {this.props.hero}
        </section>
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
