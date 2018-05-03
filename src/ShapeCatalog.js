import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCRipple} from '@material/ripple';

import './styles/ShapeCatalog.scss';

const ShapeCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<ShapeHero />}
      title='Shape'
      description='Shapes direct attention, identify components, communicate state, and express brand.'
      designLink='https://material.io/go/design-shape'
      docsLink='https://material.io/components/web/catalog/shape/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-shape'
      demos={<ShapeDemos />}
    />
  );
}

class ShapeHero extends Component {
  constructor(props) {
    super(props);
    this.ripple = null;
    this.initRipple = buttonEl => {
      if(buttonEl) {
        this.ripple = new MDCRipple(buttonEl);
      }
    }
  }

  componentWillUnmount() {
    this.ripple && this.ripple.destroy();
  }

  render() {
    const initRipple = buttonEl => {
      if(buttonEl) {
        this.ripple = new MDCRipple(buttonEl);
      }
    }
    return (
      <div className='hero-shape-container mdc-shape-container'>
        <button className='mdc-button mdc-button--unelevated' ref={initRipple}>Angled Corners</button>
        <div className='mdc-shape-container__corner mdc-shape-container__corner--top-left'></div>
        <div className='mdc-shape-container__corner mdc-shape-container__corner--top-right'></div>
        <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-right'></div>
        <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-left'></div>
      </div>
    );
  }
}

class ShapeDemos extends Component {
  constructor(props) {
    super(props);
    this.ripples = [];
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    const initRipple = buttonEl => buttonEl && this.ripples.push(new MDCRipple(buttonEl));
    return (
      <div>
        <h3>Contained Button</h3>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={initRipple}>Skip</button>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-left'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-right'></div>
        </div>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={initRipple}>Finish</button>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-left'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-right'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-right'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-left'></div>
        </div>

        <h3>Outlined Button</h3>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={initRipple}>Skip</button>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-left'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-right'></div>
        </div>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={initRipple}>Finish</button>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-left'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--top-right'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-right'></div>
          <div className='mdc-shape-container__corner mdc-shape-container__corner--bottom-left'></div>
        </div>
      </div>
    );
  }
}

export default ShapeCatalog;
