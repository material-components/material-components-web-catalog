import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTopAppBar} from '@material/top-app-bar/index';

import {MDCRipple} from '@material/ripple/index';
import classnames from 'classnames';

import './styles/TopAppBarCatalog.scss';

const TopAppBarVariants = {
  standard: 'standard',
  short: 'short',
  shortCollapsed: 'shortCollapsed',
  prominent: 'prominent',
  prominentDense: 'prominentDense',
  fixed: 'fixed',
  dense: 'dense',
};

const TopAppBarCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<TopAppBarHero/>}
      title='Top App Bar'
      description='Top App Bars are a container for items such as application title, navigation icon, and action items.'
      designLink='https://material.io/go/design-app-bar-top'
      docsLink='https://material.io/components/web/catalog/top-app-bar/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar'
      initialConfig={TopAppBarConfig}
      demos={<TopAppBarDemos {...props}/>}
      {...props}
    />
  );
};

const classes = (variant) => {
  const {short, shortCollapsed, prominent, prominentDense, fixed, dense} = TopAppBarVariants;
  return classnames('hero-top-app-bar', 'mdc-top-app-bar', {
    // The short variant includes the has-action-item class because the top app bar is not destroyed/recreated every
    // time the props change so this class should persist for every short instance.
    'mdc-top-app-bar--short mdc-top-app-bar--short-has-action-item': variant === short || variant === shortCollapsed,
    'mdc-top-app-bar--short-collapsed': variant === shortCollapsed,
    'mdc-top-app-bar--fixed': variant === fixed,
    'mdc-top-app-bar--prominent': variant === prominent || variant === prominentDense,
    'mdc-top-app-bar--dense': variant === dense || variant === prominentDense,
  });
};

export class TopAppBarHero extends Component {

  state = {topAppBar: undefined};
  topAppBarRef = React.createRef();
  ripples = [];

  initRipple = icon => {
    if (!icon) return;
    const current = new MDCRipple(icon);
    current.unbounded = true;
    this.ripples.push(current);
  }

  componentDidMount() {
    this.initTopAppBar();
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
    if (this.state.topAppBar) {
      this.state.topAppBar.destroy();
    }
  }

  initTopAppBar = () => {
    if (this.state.topAppBar) {
      this.state.topAppBar.destroy();
    }
    this.setState({topAppBar: new MDCTopAppBar(this.topAppBarRef.current)});
  }

  render() {
    const {short, shortCollapsed} = TopAppBarVariants;
    const variant = this.props.config.options.type.value;
    const title = this.props.config.options.title.value;

    const topAppBarIconsClasses = 'mdc-icon-button material-icons mdc-top-app-bar__action-item';

    const actionItems = variant === shortCollapsed || variant === short ?
        this.renderSingleActionItem(topAppBarIconsClasses) : this.renderActionItems(topAppBarIconsClasses);

    return (
      <header className={classes(variant)} ref={this.topAppBarRef}>
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            <button className='mdc-icon-button material-icons mdc-top-app-bar__navigation-icon' ref={this.initRipple}>menu</button>
            <span className='mdc-top-app-bar__title'>{title}</span>
          </section>
          {actionItems}
        </div>
      </header>
    );
  }

  renderActionItems(topAppBarIconsClasses) {
    return (
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <button className={topAppBarIconsClasses} aria-label='Download' ref={this.initRipple}>file_download</button>
          <button className={topAppBarIconsClasses} aria-label='Print this page' ref={this.initRipple}>print</button>
          <button className={topAppBarIconsClasses} aria-label='Bookmark this page' ref={this.initRipple}>bookmark</button>
        </section>
    );
  }

  renderSingleActionItem(topAppBarIconsClasses) {
    return (
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
          <button className={topAppBarIconsClasses} aria-label='Bookmark this page' ref={this.initRipple}>bookmark</button>
        </section>
    );
  }
}

class TopAppBarDemos extends Component {
  render() {
    return (
      <div className='demos-display'>
        {this.getVariant('Standard', 'standard')}
        {this.getVariant('Fixed', 'fixed')}
        {this.getVariant('Dense', 'dense')}
        {this.getVariant('Prominent', 'prominent')}
        {this.getVariant('Short', 'short')}
        {this.getVariant('Short - Always Collapsed', 'short-collapsed')}
      </div>
    );
  }

  getVariant(title, path) {
    const {match} = this.props;
    const topAppBarVariantLink = `#${match.url}/${path}`;
    const src = `${window.location.protocol}//${window.location.host}${window.location.pathname}?bust${topAppBarVariantLink}`;

    return (
      <div className='demo'>
        <div>
          <a href={topAppBarVariantLink} target='_blank'>
            <h3 className='mdc-typography--subtitle1'>{title}</h3>
          </a>
        </div>
        <div>
          <iframe className='frame' title={title} src={src} />
        </div>
      </div>
    );
  }
}

export const TopAppBarReactTemplate = (config) => {
  const {prominentDense, standard} = TopAppBarVariants;
  const variant = config.options.type.value;
  const title = config.options.title.value;
  let variantStr = variant;
  if (variantStr === standard) {
    variantStr = '';
  } else if (variantStr === prominentDense) {
    variantStr = 'prominent dense';
  }

  return `
    <TopAppBar
      title='${title}'
      ${variantStr}
      navigationIcon={<MaterialIcon
        icon='menu'
        onClick={() => console.log('click')}
      />}
      actionItems={[
        <MaterialIcon icon='file_download' />,
        <MaterialIcon icon='print' />,
        <MaterialIcon icon='bookmark' />,
      ]}
    />
  `;
}

const TopAppBarConfig = {
  options: {
    header: {
      type: 'label',
      name: 'Options',
    },
    type: {
      type: 'select',
      name: 'Variant',
      urlParam: 'variant',
      value: 'standard',
      options: [
        {
          label: 'Standard',
          value: 'standard',
        },
        {
          label: 'Short',
          value: 'short',
        },
        {
          label: 'Short, Always Collapsed',
          value: 'shortCollapsed',
        },
        {
          label: 'Prominent',
          value: 'prominent',
        },
        {
          label: 'Prominent and Dense',
          value: 'prominentDense',
        },
        {
          label: 'Fixed',
          value: 'fixed',
        },
        {
          label: 'Dense',
          value: 'dense',
        },
      ],
    },
    title: {
      type: 'textfield',
      name: 'Title',
      label: 'Title',
      urlParam: 'title',
      value: 'San Francisco, CA'
    }
  },
  order: [
    'header', 'type', 'title',
  ],
};


export default TopAppBarCatalog;
