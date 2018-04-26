import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCIconToggle} from '@material/icon-toggle';
import {MDCRipple} from '@material/ripple';

import './styles/CardPage.scss';
import cardMedia1x1Img from './images/card_media_1x1.jpg';
import cardMedia16x9Img from './images/card_media_16x9.jpg';

const CardPage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<CardHero/>}
        title='Card'
        description='Cards contain content and actions about a single subject.'
        designLink='https://material.io/guidelines/components/cards.html'
        docsLink='https://material.io/components/web/catalog/cards/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-card'
        demos={<CardDemos/>}
      />
    </div>
  );
};

class CardHero extends Component {
  constructor(props) {
    super(props);
    this.iconToggles = [];
    this.ripples = [];
    this.initIconToggle = (surfaceEl) => this.iconToggles.push(new MDCIconToggle(surfaceEl));
    this.initRipple = (surfaceEl) => this.ripples.push(new MDCRipple(surfaceEl));
  }

  componentWillUnmount() {
    this.iconToggles.forEach((iconToggle) => iconToggle.destroy());
    this.ripples.forEach((ripple) => ripple.destroy());
  }

  render() {
    return (
      <div>
        <div className='mdc-card demo-card demo-card--hero'>
          <div className='mdc-card__primary-action' tabIndex='0' ref={this.initRipple}>
            <div className='mdc-card__media mdc-card__media--16-9 demo-card__media'
                 style={{backgroundImage: `url("${cardMedia16x9Img}")`}}></div>
            <div className='demo-card__primary'>
              <h2 className='demo-card__title mdc-typography--headline6'>Our Changing Planet</h2>
              <h3 className='demo-card__subtitle mdc-typography--subtitle2'>by Kurt Wagner</h3>
            </div>
            <div className='demo-card__secondary mdc-typography--body2'>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
          </div>
          <div className='mdc-card__actions'>
            <div className='mdc-card__action-buttons'>
              <button className='mdc-button mdc-card__action mdc-card__action--button'>Read</button>
              <button className='mdc-button mdc-card__action mdc-card__action--button'>Bookmark</button>
            </div>
            <div className='mdc-card__action-icons'>
              <i className='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                 tabIndex='0'
                 role='button'
                 aria-pressed='false'
                 aria-label='Add to favorites'
                 title='Add to favorites'
                 data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
                 data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'
                 ref={this.initIconToggle}>
                favorite_border
              </i>
              <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                 tabIndex='0'
                 role='button'
                 data-mdc-ripple-is-unbounded
                 title='Share'
                 ref={this.initRipple}>
                share
              </i>
              <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                 tabIndex='0'
                 role='button'
                 data-mdc-ripple-is-unbounded
                 title='More options'
                 ref={this.initRipple}>
                more_vert
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CardDemos extends Component {
  constructor(props) {
    super(props);
    this.iconToggles = [];
    this.ripples = [];
    this.initIconToggle = (surfaceEl) => this.iconToggles.push(new MDCIconToggle(surfaceEl));
    this.initRipple = (surfaceEl) => this.ripples.push(new MDCRipple(surfaceEl));
  }

  componentWillUnmount() {
    this.iconToggles.forEach((iconToggle) => iconToggle.destroy());
    this.ripples.forEach((ripple) => ripple.destroy());
  }

  render() {
    return (
      <div>
        <section className='demo-card-collection'>
          <div className='mdc-card demo-card demo-card--photo'>
            <div className='mdc-card__primary-action demo-card__primary-action' tabIndex='0' ref={this.initRipple}>
              <div className='mdc-card__media mdc-card__media--square demo-card__media'
                   style={{backgroundImage: `url("${cardMedia1x1Img}")`}}>
                <div className='mdc-card__media-content demo-card__media-content--with-title'>
                  <div className='demo-card__media-title mdc-typography--subtitle2'>
                    Vacation Photos
                  </div>
                </div>
              </div>
            </div>
            <div className='mdc-card__actions mdc-card__action-icons'>
              <i className='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                 tabIndex='0'
                 role='button'
                 aria-pressed='false'
                 aria-label='Add to favorites'
                 title='Add to favorites'
                 data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
                 data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'
                 ref={this.initIconToggle}>
                favorite_border
              </i>
              <i className='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                 tabIndex='0'
                 role='button'
                 aria-pressed='false'
                 aria-label='Add bookmark'
                 title='Add bookmark'
                 data-toggle-on='{"content": "bookmark", "label": "Remove bookmark"}'
                 data-toggle-off='{"content": "bookmark_border", "label": "Add bookmark"}'
                 ref={this.initIconToggle}>
                bookmark_border
              </i>
              <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                 tabIndex='0'
                 role='button'
                 data-mdc-ripple-is-unbounded
                 title='Share'
                 ref={this.initRipple}>
                share
              </i>
            </div>
          </div>

          <div className='mdc-card demo-card demo-card--music'>
            <div className='mdc-card__primary-action demo-card__primary-action' tabIndex='0' ref={this.initRipple}>
              <div className='demo-card__music-row'>
                <div className='mdc-card__media mdc-card__media--square demo-card__media demo-card__media--music'
                     style={{backgroundImage: `url("${cardMedia1x1Img}")`}}></div>
                <div className='demo-card__music-info'>
                  <div className='demo-card__music-title mdc-typography--headline5'>Rozes</div>
                  <div className='demo-card__music-artist mdc-typography--body2'>Under the Grave</div>
                  <div className='demo-card__music-year mdc-typography--body2'>(2016)</div>
                </div>
              </div>
            </div>
            <hr className='mdc-list-divider'/>
            <div className='mdc-card__actions'>
              <div className='mdc-card__action-buttons demo-card__action-buttons--text-only'>Rate this album</div>
              <div className='mdc-card__action-icons'>
                <i className='material-icons demo-card__action-icon--star mdc-ripple-surface'
                   tabIndex='0'
                   role='button'
                   title='1 star'
                   data-mdc-ripple-is-unbounded
                   ref={this.initRipple}>
                  star_border
                </i>
                <i className='material-icons demo-card__action-icon--star mdc-ripple-surface'
                   tabIndex='0'
                   role='button'
                   title='2 stars'
                   data-mdc-ripple-is-unbounded
                   ref={this.initRipple}>
                  star_border
                </i>
                <i className='material-icons demo-card__action-icon--star mdc-ripple-surface'
                   tabIndex='0'
                   role='button'
                   title='3 stars'
                   data-mdc-ripple-is-unbounded
                   ref={this.initRipple}>
                  star_border
                </i>
                <i className='material-icons demo-card__action-icon--star mdc-ripple-surface'
                   tabIndex='0'
                   role='button'
                   title='4 stars'
                   data-mdc-ripple-is-unbounded
                   ref={this.initRipple}>
                  star_border
                </i>
                <i className='material-icons demo-card__action-icon--star mdc-ripple-surface'
                   tabIndex='0'
                   role='button'
                   title='5 stars'
                   data-mdc-ripple-is-unbounded
                   ref={this.initRipple}>
                  star_border
                </i>
              </div>
            </div>
          </div>

          <div className='mdc-card mdc-card--outlined demo-card'>
            <div className='demo-card-article-group-heading mdc-typography--subtitle2'>Headlines</div>

            <hr className='mdc-list-divider'/>

            <div className='demo-card-article mdc-ripple-surface' tabIndex='0' ref={this.initRipple}>
              <h2 className='demo-card-article__title mdc-typography--headline5'>Copper on the rise</h2>
              <p className='demo-card-article__snippet mdc-typography--body2'>
                Copper price soars amid global market optimism and increased demand.
              </p>
            </div>

            <hr className='mdc-list-divider'/>

            <div className='demo-card-article mdc-ripple-surface' tabIndex='0' ref={this.initRipple}>
              <h2 className='demo-card-article__title mdc-typography--headline5'>U.S. tech startups rebound</h2>
              <p className='demo-card-article__snippet mdc-typography--body2'>
                Favorable business conditions have allowed startups to secure more fundraising deals compared to last
                year.
              </p>
            </div>

            <hr className='mdc-list-divider'/>

            <div className='demo-card-article mdc-ripple-surface' tabIndex='0' ref={this.initRipple}>
              <h2 className='demo-card-article__title mdc-typography--headline5'>Asia's clean energy ambitions</h2>
              <p className='demo-card-article__snippet mdc-typography--body2'>
                China plans to invest billions of dollars for the development of over 300 clean energy projects in
                Southeast Asia.
              </p>
            </div>

            <hr className='mdc-list-divider'/>

            <div className='mdc-card__actions mdc-card__actions--full-bleed demo-card__actions--full-bleed'>
              <div className='mdc-button mdc-card__action mdc-card__action--button demo-card-action' tabIndex='0' ref={this.initRipple}>
                All Business Headlines
                <i className='material-icons' aria-hidden='true'>arrow_forward</i>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CardPage;
