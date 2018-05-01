import React, {Component} from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCIconToggle} from '@material/icon-toggle';
import {MDCRipple} from '@material/ripple';
import {imagePath} from './constants';

import './styles/CardPage.scss';

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
  componentWillUnmount() {
    this.ripple.destroy();
    this.iconToggle.destroy();
  }

  render() {
    return (
      <div>
        <div className='mdc-card demo-card demo-card--hero'>
          <div
            className='mdc-card__primary-action'
            tabIndex='0'
            ref={(surfaceEl) => this.ripple = new MDCRipple(surfaceEl)}>
            <div className='mdc-card__media mdc-card__media--16-9 demo-card__media'
                 style={{backgroundImage: `url("${imagePath}/card_media_16x9.jpg")`}}></div>
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
                 ref={(surfaceEl) => this.iconToggle = new MDCIconToggle(surfaceEl)}>
                favorite_border
              </i>
              <CardActionIcon title='Share' icon='share' className='mdc-card__action mdc-card__action--icon' />
              <CardActionIcon title='More options' icon='more_vert' className='mdc-card__action mdc-card__action--icon' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CardActionIcon extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
      <i className={`material-icons mdc-ripple-surface ${this.props.className}`}
        tabIndex='0'
        role='button'
        title={this.props.title}
        data-mdc-ripple-is-unbounded
        ref={(surfaceEl) => this.ripple = new MDCRipple(surfaceEl)}>
        {this.props.icon}
      </i>
    );
  }
}

const CardActionStarIcon = (props) => {
  return (
    <CardActionIcon
      title={props.title}
      className='demo-card__action-icon--star'
      icon='star_border'
    />
  );
}

class CardPhoto extends Component {
  render() {
    return (
      <div className='mdc-card demo-card demo-card--photo'>
        <div className='mdc-card__primary-action demo-card__primary-action' tabIndex='0' ref={this.props.initRipple}>
          <div className='mdc-card__media mdc-card__media--square demo-card__media'
               style={{backgroundImage: `url("${imagePath}/card_media_1x1.jpg")`}}>
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
             ref={this.props.initIconToggle}>
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
             ref={this.props.initIconToggle}>
            bookmark_border
          </i>
          <CardActionIcon title='Share' icon='share' className='mdc-card__action mdc-card__action--icon' />
        </div>
      </div>
    );
  }
}

const CardMusic = (props) => {
  return (
    <div className='mdc-card demo-card demo-card--music'>
      <div
        className='mdc-card__primary-action demo-card__primary-action'
        tabIndex='0'
        ref={props.initRipple}>
        <div className='demo-card__music-row'>
          <div className='mdc-card__media mdc-card__media--square demo-card__media demo-card__media--music'
               style={{backgroundImage: `url("${imagePath}/card_media_1x1.jpg")`}}></div>
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
          <CardActionStarIcon title='1 star'/>
          <CardActionStarIcon title='2 star'/>
          <CardActionStarIcon title='3 star'/>
          <CardActionStarIcon title='4 star'/>
          <CardActionStarIcon title='5 star'/>
        </div>
      </div>
    </div>
  );
}

class CardHeadlineRow extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    return (
      <div
        className='demo-card-article mdc-ripple-surface'
        tabIndex='0'
        ref={(surfaceEl) => this.ripple = new MDCRipple(surfaceEl)}>
        <h2 className='demo-card-article__title mdc-typography--headline5'>{this.props.title}</h2>
        <p className='demo-card-article__snippet mdc-typography--body2'>
          {this.props.subtitle}
        </p>
      </div>
    );
  }
}

const CardHeadlines = ({initRipple}) => {
  const headlines = [{
    title: 'Copper on the rise',
    subtitle: 'Copper price soars amid global market optimism and increased demand.',
  }, {
    title: 'U.S. tech startups rebound',
    subtitle: 'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.',
  }, {
    title: 'Asia\'s clean energy ambitions',
    subtitle: 'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia.',
  }];

  return (
    <div className='mdc-card mdc-card--outlined demo-card'>
      <div className='demo-card-article-group-heading mdc-typography--subtitle2'>Headlines</div>
      {headlines.map((headline, index) => (
        <div key={index}>
          <hr className='mdc-list-divider'/>
          <CardHeadlineRow title={headline.title} subtitle={headline.subtitle} />
        </div>
      ))}

      <hr className='mdc-list-divider'/>

      <div className='mdc-card__actions mdc-card__actions--full-bleed demo-card__actions--full-bleed'>
        <div className='mdc-button mdc-card__action mdc-card__action--button demo-card-action' tabIndex='0' ref={initRipple}>
          All Business Headlines
          <i className='material-icons' aria-hidden='true'>arrow_forward</i>
        </div>
      </div>
    </div>
  );
}

class CardDemos extends Component {
  ripples = [];
  iconToggles = [];

  initRipple = (surfaceEl) => this.ripples.push(new MDCRipple(surfaceEl));
  initIconToggle = (surfaceEl) => this.iconToggles.push(new MDCIconToggle(surfaceEl));

  componentWillUnmount() {
    this.ripples.forEach((ripple) => ripple.destroy());
    this.iconToggles.forEach((iconToggle) => iconToggle.destroy());
  }

  render() {
    return (
      <div>
        <section className='demo-card-collection'>
          <CardPhoto initRipple={this.initRipple} initIconToggle={this.initIconToggle} />
          <CardMusic initRipple={this.initRipple} initIconToggle={this.initIconToggle} />
          <CardHeadlines initRipple={this.initRipple} />
        </section>
      </div>
    );
  }
}

export default CardPage;
