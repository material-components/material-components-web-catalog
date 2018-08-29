import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCIconButtonToggle} from '@material/icon-button';
import {MDCRipple} from '@material/ripple';
import {imagePath} from './constants';

import './styles/CardCatalog.scss';

const CardCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<Card image actions className='demo-card--hero' />}
      title='Card'
      description='Cards contain content and actions about a single subject.'
      designLink='https://material.io/go/design-cards'
      docsLink='https://material.io/components/web/catalog/cards/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-card'
      demos={<CardDemos />}
    />
  );
};

class Card extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const {actions, className, image} = this.props;
    return (
      <div>
        <div className={`mdc-card demo-card ${className}`}>
          <div
            className='mdc-card__primary-action'
            tabIndex='0'
            ref={(surfaceEl) => this.ripple = surfaceEl && new MDCRipple(surfaceEl)}>
            {image ? <CardImage /> : null}
            <div className='demo-card__primary'>
              <h2 className='demo-card__title mdc-typography--headline6'>Our Changing Planet</h2>
              <h3 className='demo-card__subtitle mdc-typography--subtitle2'>by Kurt Wagner</h3>
            </div>
            <div className='demo-card__secondary mdc-typography--body2'>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
          </div>
          {actions ? <CardActionRow /> : null}
        </div>
      </div>
    );
  }
}

const CardImage = () => {
  return (
    <div className='mdc-card__media mdc-card__media--16-9 demo-card__media'
       style={{backgroundImage: `url('${imagePath}/photos/3x2/2.jpg')`}}></div>
  );
}

class CardActionIcon extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
      <button className={`mdc-icon-button material-icons ${this.props.className}`}
        title={this.props.title}
        data-mdc-ripple-is-unbounded
        ref={(surfaceEl) => this.ripple = surfaceEl && new MDCRipple(surfaceEl)}>{this.props.icon}</button>
    );
  }
}

class CardActionButton extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
      <button
        ref={(surfaceEl) => this.ripple = surfaceEl && new MDCRipple(surfaceEl)}
        className='mdc-button mdc-card__action mdc-card__action--button'>
        {this.props.text}
      </button>
    );
  }
}

class CardActionRow extends Component {
  componentWillUnmount() {
    this.iconToggle.destroy();
  }

  render() {
    return (
      <div className='mdc-card__actions'>
        <div className='mdc-card__action-buttons'>
          <CardActionButton text='Read' />
          <CardActionButton text='Bookmark' />
        </div>
        <div className='mdc-card__action-icons'>
          <button className='mdc-icon-button mdc-card__action mdc-card__action--icon'
             aria-pressed='false'
             aria-label='Add to favorites'
             title='Add to favorites'
             ref={(surfaceEl) => this.iconToggle = surfaceEl && new MDCIconButtonToggle(surfaceEl)}>
            <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
            <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
          </button>
          <CardActionIcon title='Share' icon='share' className='mdc-card__action mdc-card__action--icon' />
          <CardActionIcon title='More options' icon='more_vert' className='mdc-card__action mdc-card__action--icon' />
        </div>
      </div>
    );
  }
}

const CardDemos = () => {
  return (
    <section className='demo-card-collection'>
      <Card image />
      <Card actions />
    </section>
  );
}

export default CardCatalog;
