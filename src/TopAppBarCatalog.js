import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCTopAppBar} from '@material/top-app-bar/index';

import {MDCRipple} from '@material/ripple/index';
import classnames from 'classnames';

import './styles/TopAppBarCatalog.scss';

const TopAppBarTypes = {
  standard: 'Standard',
  short: 'Short',
  shortCollapsed: 'ShortCollapsed',
  prominent: 'Prominent',
  fixed: 'Fixed',
  dense: 'Dense',
}

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

const classes = (type) => {
  const {standard, short, shortCollapsed, prominent, fixed, dense} = TopAppBarTypes;

  return classnames('hero-top-app-bar', {
    'mdc-top-app-bar--short': type === short,
    'mdc-top-app-bar--short-collapsed': type === shortCollapsed,
    'mdc-top-app-bar--fixed': type === fixed,
    'mdc-top-app-bar--prominent': type === prominent,
    'mdc-top-app-bar--dense': type === dense,
    '': type === standard,
  });
}

export class TopAppBarHero extends Component {

  topAppBarRef = React.createRef();
  topAppBar;
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

  componentDidUpdate(prevProps) {
    const type = this.props.config.options[1].value;
    const prevType = prevProps.config.options[1].value;
console.log(type, prevType)
    if (type !== prevType) {
      this.initTopAppBar();
    }
  }

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
    if (this.topAppBar) {
      this.topAppBar.destroy();
    }
  }

  initTopAppBar = () => {
    if (this.topAppBar) {
      this.topAppBar.destroy();
    }
    this.topAppBar = new MDCTopAppBar(this.topAppBarRef.current);
  }

  render() {
    const type = this.props.config.options[1].value;
    const title = this.props.config.options[2].value;

    const topAppBarIconsClasses = 'material-icons mdc-top-app-bar__action-item';

    return (
      <div className={classes(type)}>
        <header className='mdc-top-app-bar' ref={this.topAppBarRef}>
          <div className='mdc-top-app-bar__row'>
            <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              <button className='material-icons mdc-top-app-bar__navigation-icon' ref={this.initRipple}>menu</button>
              <span className='mdc-top-app-bar__title'>{title}</span>
            </section>
            {this.renderActionItems(topAppBarIconsClasses)}
          </div>
        </header>
      </div>
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


const TopAppBarConfig = {
  options: [
    {
      type: 'label',
      name: 'Options',
    },
    {
      type: 'radiogroup',
      name: 'Variants',
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
          label: 'ShortCollapsed',
          value: 'shortCollapsed',
        },
        {
          label: 'Prominent',
          value: 'prominent',
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
    {
      type: 'textfield',
      name: 'Title',
      label: 'Title',
      urlParam: 'title',
      value: 'San Francisco, CA'
    }
  ],
};


export default TopAppBarCatalog;
