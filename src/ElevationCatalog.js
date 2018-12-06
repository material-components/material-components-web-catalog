import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import './styles/ElevationCatalog.scss';

const MAX_ELEVATION_LEVELS = 24;

const ElevationCatalog = () => {
  const description = 'Elevation is the relative depth, or distance, between two surfaces along the z-axis.';
  return (
    <ComponentCatalogPanel
      hero={<ElevationHero />}
      title='Elevation'
      description={description}
      designLink='https://material.io/go/design-elevation'
      docsLink='https://material.io/components/web/catalog/elevation/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation'
      demos={<ElevationDemos />}
    />
  );
};

export class ElevationHero extends Component {
  render() {
    return (
        <div className='elevation-hero'>
          <div className='elevation-demo-surface mdc-elevation--z0'>
            Flat 0dp
          </div>
          <div className='elevation-demo-surface mdc-elevation--z8'>
            Raised 8dp
          </div>
          <div className='elevation-demo-surface mdc-elevation--z16'>
            Raised 16dp
          </div>
        </div>
    );
  }
}

class ElevationDemos extends Component {
  render() {
    return (
      <div className='elevation-demo-container'>
        {this.getElevationDemos()}
      </div>
    );
  }

  getElevationDemos() {
    let demos = [];
    for(let x = 0; x <= MAX_ELEVATION_LEVELS; x++) {
      demos.push(
      <div key={'elevation' + x} className={'elevation-demo-surface mdc-elevation--z' + x}>
      {x}dp
      </div>);
    }

    return demos;
  }
}

export default ElevationCatalog;
