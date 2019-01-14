import React, {Component} from 'react';
import {imagePath} from './constants';
import {MDCRipple} from '@material/ripple/index';
import HeroComponent from './hero/HeroComponent';
import {HeroOptionsComponent} from './hero/HeroOptionsComponent';
import equal from 'deep-equal';
import {getUrlParamsFromSearch} from './hero/urlHelper';

import './styles/ComponentCatalogPanel.scss';

// ComponentCatalogPanel is the container for catalog component content,
// that renders the hero and demo sections.
class ComponentCatalogPanel extends Component {
  ripples = [];
  initRipple = el => el && this.ripples.push(new MDCRipple(el));

  constructor(props) {
    super(props);
    // Deep copy for local object
    const localConfig = JSON.parse(JSON.stringify(this.props.initialConfig));
    const urlParams = getUrlParamsFromSearch(this.props.location.search);
    this.state = {
      localConfig: this.copyUrlParamsToLocalConfig(localConfig, urlParams),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const search = getUrlParamsFromSearch(this.props.location.search);
    const prevSearch = getUrlParamsFromSearch(prevProps.location.search);
    if (!equal(search, prevSearch)) {
      this.setState({localConfig: this.copyUrlParamsToLocalConfig(this.state.localConfig, search)});
    }
  }

  componentWillUnmount() {
    this.ripples.forEach((ripple) => ripple.destroy());
  }

  copyUrlParamsToLocalConfig = (localConfig, urlParams) => {
    const config = JSON.parse(JSON.stringify(localConfig));

    // For each url param, copy it over to the local config in the appropriate place.
    Object.keys(urlParams).forEach((key) => {
      if (config.options) {
        config.options.forEach((opt) => {
          if (key === opt.urlParam) {
            // To be cleaned up with a standardized model when all option types are defined.
            if (opt.type === 'radiogroup' || opt.type === 'textfield') {
              opt.value = urlParams[key];
            }
          }
        });
      }
    });

    return config;
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
    const {localConfig} = this.state;
    let heroComponent;

    // TODO: Remove this check when all components have been updated.
    if (initialConfig) {
      heroComponent = <HeroComponent config={localConfig} {...this.props}>{hero}</HeroComponent>;
    } else {
      heroComponent = <div className='hero'>{hero}</div>;
    }

    return(
      <section className='component-catalog-panel'>
        <div className='component-catalog-panel__hero-area'>
          <div className='component-catalog-panel__header'>
            <h1 className='mdc-typography--headline3'>{title}</h1>
            <p className='mdc-typography--body1'>{description}</p>
            <HeroOptionsComponent
              className='component-catalog-panel__header__hero-options'
              config={localConfig}
              {...this.props}
            />
          </div>
          {heroComponent}
          <HeroOptionsComponent
            className='component-catalog-panel__hero-area__hero-options'
            config={localConfig}
            {...this.props}
          />
        </div>

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
