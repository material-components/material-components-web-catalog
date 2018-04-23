import React, { Component } from 'react';

import './styles/ComponentPage.scss';
import materialLogo from './images/ic_material_design_24px.svg';
import docsImg from './images/ic_drive_document_24px.svg';
import codeImg from './images/ic_code_24px.svg';

class ComponentPage extends Component {
  renderSidebarLink(link, index) {
    return (
      <a
        href={`/material-components-web-catalog${link.url}`}
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
        <div className='hero'>
          {this.props.hero}
        </div>
        <h2 className='demo-title mdc-typography--title'>Resources</h2>
        {this.renderResource('Material Design Guidelines', materialLogo, this.props.designLink)}
        {this.renderResource('Documentation', docsImg, this.props.docsLink)}
        {this.renderResource('Source Code', codeImg, this.props.sourceLink)}

        <h2 className='demo-title mdc-typography--title'>Demos</h2>
        {this.props.demos}
      </section>
    );
  }

  render() {
    return (
      <div className='mdc-layout-grid'>
        <div className='mdc-layout-grid__inner'>
          {this.renderSidebar(this.props.title)}
          {this.renderDemoWrapper()}
        </div>
      </div>
    );
  }
}

export default ComponentPage;
