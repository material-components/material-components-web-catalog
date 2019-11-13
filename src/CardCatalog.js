import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import classnames from 'classnames';
import {MDCIconButtonToggle} from '@material/icon-button/index';
import {MDCRipple} from '@material/ripple/index';
import {imagePath} from './constants';

import './styles/CardCatalog.scss';

const CardTypes = {
  basic: 'basic',
  basicHeader: 'basicHeader',
  basicMediaText: 'basicMediaText',
  basicButtons: 'basicButtons',
  basicIcons: 'basicIcons',
  uiControl: 'uiControl',
};

const CardCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<CardHero />}
      title='Card'
      description='Cards contain content and actions about a single subject.'
      designLink='https://material.io/go/design-cards'
      docsLink='https://material.io/components/web/catalog/cards/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-card'
      demos={<CardDemos />}
      initialConfig={CardConfig}
      {...props}
    />
  );
};

export const CardHero = (props) => {
  const type = props.config.options.type.value;
  return (<Card
    image
    actions
    type={type}
  />);
};

const classes = ({className, shaped, type}) => {
  const {basicHeader, basicMediaText, uiControl} = CardTypes;
  return classnames('mdc-card demo-card',
  {
    'demo-card-shaped': shaped,
    'demo-basic-with-header': type === basicHeader,
    'demo-basic-with-text-over-media': type === basicMediaText,
    'demo-ui-control': type === uiControl,
  }, className);
};

class Card extends Component {
  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const {actions, image, type} = this.props;
    const {basicHeader, basicMediaText, basicButtons, basicIcons, uiControl} = CardTypes;

    return (
      <div className={classes(this.props)}>
        {type === basicHeader ? <CardHeader /> : null}
        <div
          className='mdc-card__primary-action demo-card__primary-action'
          tabIndex='0'
          ref={(surfaceEl) => this.ripple = surfaceEl && new MDCRipple(surfaceEl)}>
          {image ? <CardMedia
            showText={type === basicMediaText}
            square={type === uiControl}
            /> : null}
          {type !== basicHeader && type !== basicMediaText ? <CardHeader /> : null}

          {type !== uiControl ? <CardSecondary /> : null}
        </div>
        {actions ? (
          <CardActionRow
            showIcons={type !== basicButtons}
            showButtons={type !== basicIcons}
          />
         ) : null}
      </div>
    );
  }
}

const CardHeader = () => {
  return (
    <div className='demo-card__primary'>
      <h2 className='demo-card__title mdc-typography mdc-typography--headline6'>Our Changing Planet</h2>
      <h3 className='demo-card__subtitle mdc-typography mdc-typography--subtitle2'>by Kurt Wagner</h3>
    </div>
  );
};

const CardSecondary = () => {
  return (
    <div className='demo-card__secondary mdc-typography mdc-typography--body2'>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </div>
  );
};

const CardMedia = ({square = false, showText = false}) => {
  return (
    <div className={`mdc-card__media mdc-card__media--${square ? 'square' : '16-9'} demo-card__media`}
       style={{backgroundImage: `url('${imagePath}/photos/3x2/2.jpg')`}}>
      {showText ? <div className='mdc-card__media-content demo-card__media-content'>
        <CardHeader />
      </div> : null}
    </div>
  );
};

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
        <span className='mdc-button__ripple'></span>
        {this.props.text}
      </button>
    );
  }
}

class CardActionRow extends Component {
  componentWillUnmount() {
    this.iconToggle && this.iconToggle.destroy && this.iconToggle.destroy();
  }

  render() {
    const {showIcons = true, showButtons = true} = this.props;
    return (
      <div className='mdc-card__actions'>
        {
          showButtons ?
          <div className='mdc-card__action-buttons'>
            <CardActionButton text='Read' />
            <CardActionButton text='Bookmark' />
          </div> : null
        }
        {
          showIcons ?
          <div className='mdc-card__action-icons'>
            <button
              className='mdc-icon-button mdc-card__action mdc-card__action--icon'
              aria-pressed='false'
              aria-label='Add to favorites'
              title='Add to favorites'
              ref={(surfaceEl) => this.iconToggle = surfaceEl && new MDCIconButtonToggle(surfaceEl)}
            >
              <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
              <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
            </button>
            <CardActionIcon title='Share' icon='share' className='mdc-card__action mdc-card__action--icon' />
            <CardActionIcon title='More options' icon='more_vert' className='mdc-card__action mdc-card__action--icon' />
          </div> : null
        }
      </div>
    );
  }
}

const CardDemos = () => {
  return (
    <section className='demo-card-collection'>
      <Card image />
      <Card actions />
      <Card actions shaped />
    </section>
  );
};


const CardHeaderTemplate = () => {
  return `
  <div className='demo-card__primary'>
    <Headline6 className='demo-card__title'>
      Our Changing Planet
    </Headline6>
    <Subtitle2 className='demo-card__subtitle'>
      by Kurt Wagner
    </Subtitle2>
  </div>
  `;
};

const CardSecondaryTemplate = () => {
  return `
  <Body2 className='demo-card__secondary'>
    Visit ten places on our planet that are undergoing the biggest changes today.
  </Body2>
  `;
};

const CardIconsTemplate = () => {
  return `
    <CardActionIcons>
      <IconButton>
        <MaterialIcon icon='favorite_border' />
      </IconButton>
      <IconButton>
        <MaterialIcon icon='share' />
      </IconButton>
      <IconButton>
        <MaterialIcon icon='more_vert' />
      </IconButton>
    </CardActionIcons>
  `;
};

const CardButtonsTemplate = () => {
  return `
    <CardActionButtons>
      <Button>Read</Button>
      <Button>Bookmark</Button>
    </CardActionButtons>
  `;
};

const CardMediaTemplate = (showText = false, square) => {
  if (showText) {
    return `
      <CardMedia
        wide
        className='demo-card__media'
        imageUrl={image}
        contentClassName='demo-card__media-content'
      >
        ${CardHeaderTemplate()}
      </CardMedia>
    `;
  }

  return `
    <CardMedia ${square ? 'square' : 'wide'} imageUrl={image} className='demo-card__media' />
  `;
};

export const CardReactTemplate = (props) => {
  const {basicHeader, basicMediaText, basicButtons, basicIcons, uiControl} = CardTypes;
  const type = props.options.type.value;
  const className = classes({type});

  return `<Card className='${className}'>
  ${type === basicHeader ? CardHeaderTemplate() : ''}
  <CardPrimaryContent className='demo-card__primary-action'>
    ${CardMediaTemplate(type === basicMediaText, type === uiControl)}
    ${type !== basicHeader && type !== basicMediaText ? CardHeaderTemplate() : ''}
    ${type !== uiControl ? CardSecondaryTemplate() : ''}
  </CardPrimaryContent>

  <CardActions>
    ${type !== basicIcons ? CardButtonsTemplate() : ''}
    ${type !== basicButtons ? CardIconsTemplate() : ''}
  </CardActions>
</Card>`;
};


const CardConfig = {
  options: {
    header: {
      type: 'label',
      name: 'Options',
    },
    type: {
      type: 'select',
      name: 'Variant',
      urlParam: 'type',
      value: 'basic', // default select first option
      options: [
        {
          label: 'Basic',
          value: CardTypes.basic,
        },
        {
          label: 'Basic w/ Text over Media',
          value: CardTypes.basicMediaText,
        },
        {
          label: 'Basic w/ Header',
          value: CardTypes.basicHeader,
        },
        {
          label: 'Basic w/ Only Buttons',
          value: CardTypes.basicButtons,
        },
        {
          label: 'Basic w/ Only Icons',
          value: CardTypes.basicIcons,
        },
        {
          label: 'Horizontal Image and Text',
          value: CardTypes.uiControl,
        },
      ],
    },
  },
  order: [
    'header', 'type',
  ],
};

export default CardCatalog;
