import React, {Component} from 'react';
import {imagePath} from './constants';
import {MDCRipple} from '@material/ripple';
import {Link} from 'react-router-dom';

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
          {this.renderListItem('Button', 'buttons_180px.svg', 'button')}
          {this.renderListItem('Card', 'cards_180px.svg', 'card')}
          {this.renderListItem('Checkbox', 'checkbox_180px.svg', 'checkbox')}
          {this.renderListItem('Dialog', 'dialog_180px.svg', 'dialog')}
          {this.renderListItem('Drawer', 'drawer_180px.svg', 'drawer')}
          {this.renderListItem('Elevation', 'elevation_180px.svg', 'elevation')}
          {this.renderListItem('FAB', 'floating_action_button_180px.svg', 'fab')}
          {this.renderListItem('Icon Toggle', 'icon_toggle_180px.svg', 'icon-toggle')}
          {this.renderListItem('Image List', 'image_list_180px.svg', 'image-list')}
          {this.renderListItem('List', 'list_180px.svg', 'list')}
          {this.renderListItem('Linear Progress', 'linear_progress_180px.svg', 'linear-progress-indicator')}
          {this.renderListItem('Menu', 'menu_180px.svg', 'menu')}
          {this.renderListItem('Radio', 'radio_180px.svg', 'radio')}
          {this.renderListItem('Ripple', 'ripple_180px.svg', 'ripple')}
          {this.renderListItem('Slider', 'slider_180px.svg', 'slider')}
          {this.renderListItem('Select', 'form_field_180px.svg', 'select')}
          {this.renderListItem('Switch', 'switch_180px.svg', 'switch')}
          {this.renderListItem('Text Field', 'form_field_180px.svg', 'text-field')}
          {this.renderListItem('Top App Bar', 'top_app_bar_180px.svg', 'top-app-bar')}
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
            <img className='mdc-image-list__image' src={`${imagePath}/${imageSource}`} alt={`${title} icon`}/>
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
