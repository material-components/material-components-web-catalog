import React, {Component} from 'react';
import {imagePath} from './constants';
import {MDCRipple} from '@material/ripple/index';
import HeroComponent from './hero/HeroComponent';

// ComponentCatalogPanel is the container for catalog component content,
// that renders the hero and demo sections.
class ComponentCatalogPanel extends Component {
  ripples = [];
  initRipple = el => el && this.ripples.push(new MDCRipple(el));

  componentWillUnmount() {
    this.ripples.forEach((ripple) => ripple.destroy());
  }

  renderResource(title, imageSource, url) {
    if (!url) return;
    return (
      <a href={url} role='listitem' className='mdc-list-item' target='_blank' ref={this.initRipple}>
        <span className='mdc-list-item__graphic'>
          <img src={imageSource} className='resources-icon' alt={`${title} icon`}/>
        </span>
        {title}
      </a>
    );
  }

  render() {
    const {designLink, description, demos, docsLink, hero, sourceLink, title, initialConfig} = this.props;
    let heroComponent;

    // TODO: Remove this check when all components have been updated.
    if (initialConfig) {
      heroComponent = <HeroComponent {...this.props}>{hero}</HeroComponent>;
    } else {
      heroComponent = <div className='hero'>{hero}</div>;
    }

    return(
      <section>
        <h1 className='mdc-typography--headline5'>{title}</h1>
        <p className='mdc-typography--body1'>{description}</p>
          {heroComponent}
        <h2 className='demo-title mdc-typography--headline6'>Resources</h2>
        {this.renderResource('Material Design Guidelines', `${imagePath}/ic_material_design_24px.svg`, designLink)}
        {this.renderResource('Documentation', `${imagePath}/ic_drive_document_24px.svg`, docsLink)}
        {this.renderResource('Source Code', `${imagePath}/ic_code_24px.svg`, sourceLink)}

        <h2 className='demo-title mdc-typography--headline6'>Demos</h2>
        {demos}
      </section>
    );
  }
}

export default ComponentCatalogPanel;
