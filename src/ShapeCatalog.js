import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCIconToggle} from '@material/icon-toggle';
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
  componentWillUnmount() {
    this.ripple && this.ripple.destroy();
  }

  render() {
    return (
      <div className='hero-shape-container mdc-shape-container'>
        <button className='mdc-button mdc-button--unelevated' ref={el => this.ripple = el && new MDCRipple(el)}>Angled Corners</button>
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
    this.initRipple = surfaceEl => surfaceEl && this.ripples.push(new MDCRipple(surfaceEl));
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
    this.iconToggle && this.iconToggle.destroy();
  }

  renderCorner(position) {
    return(
      <div className={`mdc-shape-container__corner mdc-shape-container__corner--${position}`}></div>
    );
  }

  render() {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>Contained Button</h3>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={this.initRipple}>Skip</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('bottom-right')}
        </div>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={this.initRipple}>Finish</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('top-right')}
          {this.renderCorner('bottom-left')}
          {this.renderCorner('bottom-right')}
        </div>

        <h3 className='mdc-typography--subtitle1'>Outlined Button</h3>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={this.initRipple}>Skip</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('bottom-right')}
        </div>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={this.initRipple}>Finish</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('top-right')}
          {this.renderCorner('bottom-left')}
          {this.renderCorner('bottom-right')}
        </div>

        <h3 className='mdc-typography--subtitle1'>Card</h3>
        <div className='card-shape-container mdc-shape-container'>
          <div className='mdc-card mdc-card--outlined'>
            <div className='mdc-card__primary-action' ref={this.initRipple}>
              <div className='demo-card__primary'>
                <h2 className='demo-card__title mdc-typography--headline6'>Our Changing Planet</h2>
                <h3 className='demo-card__subtitle mdc-typography--subtitle2'>by Kurt Wagner</h3>
              </div>
              <div className='demo-card__secondary mdc-typography--body2'>
                Visit ten places on our planet that are undergoing the biggest changes today.
              </div>
            </div>
            <div className='mdc-card__actions'>
              <div className='mdc-card__action-icons'>
                <i className='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                  tabIndex='0'
                  role='button'
                  aria-pressed='false'
                  aria-label='Add to favorites'
                  title='Add to favorites'
                  data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
                  data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'
                  ref={(surfaceEl) => this.iconToggle = surfaceEl && new MDCIconToggle(surfaceEl)}>
                  favorite_border
                </i>
                <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                  tabIndex='0'
                  role='button'
                  title='Share'
                  data-mdc-ripple-is-unbounded
                  ref={this.initRipple}>
                  share
                </i>
                <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                  tabIndex='0'
                  role='button'
                  title='More options'
                  data-mdc-ripple-is-unbounded
                  ref={this.initRipple}>
                  more_vert
                </i>
              </div>
            </div>
          </div>
          {this.renderCorner('top-right')}
          {this.renderCorner('bottom-left')}
        </div>
      </div>
    );
  }
}

export default ShapeCatalog;
