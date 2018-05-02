import React, {Component} from 'react';
import {imagePath} from './constants';

class ComponentPanel extends Component {

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

  render() {
    const {designLink, description, demos, docsLink, hero, sourceLink, title} = this.props;
    return(
      <section className='demo-wrapper mdc-layout-grid__cell mdc-layout-grid__cell--span-10'>
        <h1 className='mdc-typography--headline'>{title}</h1>
        <p className='mdc-typography--body1'>{description}</p>
        <div className='hero'>
          {hero}
        </div>
        <h2 className='demo-title mdc-typography--title'>Resources</h2>
        {this.renderResource('Material Design Guidelines', `${imagePath}/ic_material_design_24px.svg`, designLink)}
        {this.renderResource('Documentation', `${imagePath}/ic_drive_document_24px.svg`, docsLink)}
        {this.renderResource('Source Code', `${imagePath}/ic_code_24px.svg`, sourceLink)}

        <h2 className='demo-title mdc-typography--title'>Demos</h2>
        {demos}
      </section>
    );
  }
}

export default ComponentPanel;
