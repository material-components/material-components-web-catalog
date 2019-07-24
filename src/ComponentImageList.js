import React, {Component} from 'react';
import {MDCRipple} from '@material/ripple/index';
import {Link} from 'react-router-dom';

import buttonImg from './images/buttons_180px.svg';
import cardsImg from './images/cards_180px.svg';
import checkboxImg from './images/checkbox_180px.svg';
import chipsImg from './images/chips_180px.svg';
import dataTableImg from './images/data_table_180px.svg';
import dialogImg from './images/dialog_180px.svg';
import drawerImg from './images/drawer_180px.svg';
import elevationImg from './images/elevation_180px.svg';
import fabImg from './images/floating_action_button_180px.svg';
import iconButtonImg from './images/icon_button_180px.svg';
import imageListImg from './images/image_list_180px.svg';
import inputImg from './images/form_field_180px.svg'; // Used for Text Field and Select
import layoutGridImg from './images/layout_grid_180px.svg';
import listImg from './images/list_180px.svg';
import linearProgressImg from './images/linear_progress_180px.svg';
import menuImg from './images/menu_180px.svg';
import radioImg from './images/radio_180px.svg';
import rippleImg from './images/ripple_180px.svg';
import sliderImg from './images/slider_180px.svg';
import snackbarImg from './images/snackbar_180px.svg';
import switchImg from './images/switch_180px.svg';
import tabsImg from './images/tabs_180px.svg';
import themeImg from './images/ic_theme_24px.svg';
import topAppBarImg from './images/top_app_bar_180px.svg';
import typographyImg from './images/fonts_180px.svg';

// ComponentImageList renders the home page with a link to each component.
class ComponentImageList extends Component {

  ripples = [];
  initRipple = el => el && this.ripples.push(new MDCRipple(el));

  componentWillUnmount() {
    this.ripples.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div>
        <ul id='catalog-image-list' className='mdc-image-list standard-image-list mdc-top-app-bar--fixed-adjust'>
          {this.renderListItem('Button', buttonImg, 'button')}
          {this.renderListItem('Card', cardsImg, 'card')}
          {this.renderListItem('Checkbox', checkboxImg, 'checkbox')}
          {this.renderListItem('Chips', chipsImg, 'chips')}
          {this.renderListItem('Data Table', dataTableImg, 'data-table')}
          {this.renderListItem('Dialog', dialogImg, 'dialog')}
          {this.renderListItem('Drawer', drawerImg, 'drawer')}
          {this.renderListItem('Elevation', elevationImg, 'elevation')}
          {this.renderListItem('FAB', fabImg, 'fab')}
          {this.renderListItem('Icon Button', iconButtonImg, 'icon-button')}
          {this.renderListItem('Image List', imageListImg, 'image-list')}
          {this.renderListItem('Layout Grid', layoutGridImg, 'layout-grid')}
          {this.renderListItem('List', listImg, 'list')}
          {this.renderListItem('Linear Progress', linearProgressImg, 'linear-progress-indicator')}
          {this.renderListItem('Menu', menuImg, 'menu')}
          {this.renderListItem('Radio', radioImg, 'radio')}
          {this.renderListItem('Ripple', rippleImg, 'ripple')}
          {this.renderListItem('Select', inputImg, 'select')}
          {this.renderListItem('Slider', sliderImg, 'slider')}
          {this.renderListItem('Snackbar', snackbarImg, 'snackbar')}
          {this.renderListItem('Switch', switchImg, 'switch')}
          {this.renderListItem('Tab Bar', tabsImg, 'tabs')}
          {this.renderListItem('Text Field', inputImg, 'text-field')}
          {this.renderListItem('Theme', themeImg, 'theme')}
          {this.renderListItem('Top App Bar', topAppBarImg, 'top-app-bar')}
          {this.renderListItem('Typography', typographyImg, 'typography')}
        </ul>
      </div>
    );
  }

  renderListItem(title, imageSource, url) {
    const fullUrl = `/component/${url}`;
    return (
      <li className='catalog-image-list-item mdc-image-list__item'>
        <Link to={fullUrl} className='catalog-image-link'>
          <div className='catalog-image-list-item-container mdc-image-list__image-aspect-container mdc-ripple-surface'
               ref={(el) => el && this.initRipple(el)}>
            <div className='mdc-image-list__image' dangerouslySetInnerHTML={{__html: imageSource}} />
          </div>

          <div className='mdc-image-list__supporting'>
            <span className='catalog-image-list-label mdc-image-list__label'>{title}</span>
          </div>
        </Link>
      </li>
    );
  }
}

export default ComponentImageList;
