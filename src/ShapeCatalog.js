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
  constructor(props) {
    super(props);
    this.ripple = null;
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

  renderCorner(position) {
    return(
      <div className={`mdc-shape-container__corner mdc-shape-container__corner--${position}`}></div>
    );
  }

  render() {
    const initRipple = el => el && this.ripples.push(new MDCRipple(el));
    return (
      <div>
        <h3>Contained Button</h3>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={initRipple}>Skip</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('bottom-right')}
        </div>
        <div className='contained-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--unelevated' ref={initRipple}>Finish</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('top-right')}
          {this.renderCorner('bottom-left')}
          {this.renderCorner('bottom-right')}
        </div>

        <h3>Outlined Button</h3>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={initRipple}>Skip</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('bottom-right')}
        </div>
        <div className='outlined-button-shape-container mdc-shape-container'>
          <button className='mdc-button mdc-button--outlined' ref={initRipple}>Finish</button>
          {this.renderCorner('top-left')}
          {this.renderCorner('top-right')}
          {this.renderCorner('bottom-left')}
          {this.renderCorner('bottom-right')}
        </div>

        <h3>Card</h3>
        <div className='card-shape-container mdc-shape-container'>
          <div class='mdc-card mdc-card--outlined'>
            <div class='mdc-card__primary-action' ref={initRipple}>
              <div class='demo-card__primary'>
                <h2 class='demo-card__title mdc-typography--headline6'>Our Changing Planet</h2>
                <h3 class='demo-card__subtitle mdc-typography--subtitle2'>by Kurt Wagner</h3>
              </div>
              <div class='demo-card__secondary mdc-typography--body2'>
                Visit ten places on our planet that are undergoing the biggest changes today.
              </div>
            </div>
            <div class='mdc-card__actions'>
              <div class='mdc-card__action-icons'>
                <i class='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                  tabindex='0'
                  role='button'
                  aria-pressed='false'
                  aria-label='Add to favorites'
                  title='Add to favorites'
                  data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
                  data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'
                  ref={(surfaceEl) => this.iconToggle = surfaceEl && new MDCIconToggle(surfaceEl)}>
                  favorite_border
                </i>
                <i class='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                  tabindex='0'
                  role='button'
                  title='Share'
                  data-mdc-ripple-is-unbounded
                  ref={initRipple}>
                  share
                </i>
                <i class='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                  tabindex='0'
                  role='button'
                  title='More options'
                  data-mdc-ripple-is-unbounded
                  ref={initRipple}>
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
