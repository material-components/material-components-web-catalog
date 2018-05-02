import React, {Component} from 'react';

import Sidebar from './Sidebar';
import ButtonPage from './ButtonPage';
import CardPage from './CardPage';
import CheckboxPage from './CheckboxPage';
import FabPage from './FabPage';
import ImageListPage from './ImageListPage';
import ListPage from './ListPage';
import TextFieldPage from './TextFieldPage';
import TopAppBarPage from './TopAppBarPage';
import HeaderBar from './HeaderBar';

import {Switch, Route} from 'react-router';

import './styles/ComponentSection.scss';

class ComponentSection extends Component {
  renderComponentRoutes() {
    const {match} = this.props;

    return (
      <Switch>
        <Route path={`${match.path}/button`} component={ButtonPage} />
        <Route path={`${match.path}/card`} component={CardPage} />
        <Route path={`${match.path}/checkbox`} component={CheckboxPage} />
        <Route path={`${match.path}/fab`} component={FabPage} />
        <Route path={`${match.path}/image-list`} component={ImageListPage} />
        <Route path={`${match.path}/list`} component={ListPage} />
        <Route path={`${match.path}/text-field`} component={TextFieldPage} />
        <Route path={`${match.path}/top-app-bar`} component={TopAppBarPage} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div className='mdc-top-app-bar--fixed-adjust'>
          <div className='mdc-layout-grid'>
            <div className='mdc-layout-grid__inner'>
              <Sidebar {...this.props} activeLink={this.props.title} />
              {this.renderComponentRoutes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentSection;
