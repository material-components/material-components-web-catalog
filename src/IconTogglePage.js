import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCIconToggle} from '@material/icon-toggle';

import './styles/IconTogglePage.scss';

const IconTogglePage = () => {
  return (
    <div>
      <HeaderBar />
      <ComponentPage
        hero={<IconToggle/>}
        title='Icon Toggle'
        description='Icons are appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item. '
        designLink='https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons'
        docsLink='https://material.io/components/web/catalog/buttons/icon-toggle-buttons/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle'
        demos={<IconToggle/>}
      />
    </div>
  );
};

class IconToggle extends Component {
  render() {
    return (
        <div>
          <i className='mdc-icon-toggle material-icons' role='button' aria-pressed='false'
            aria-label='Add to favorites' tabIndex='0'
            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            ref={iconToggleEl => MDCIconToggle.attachTo(iconToggleEl)}>
            favorite_border
          </i>
        </div>
    );
  }
}

export default IconTogglePage;