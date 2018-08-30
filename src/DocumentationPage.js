import React, {Component} from 'react';

import {Switch, Route} from 'react-router';
import {routesList} from './Routes';
import SassDoc from './SassDoc';

// ComponentPage renders the <Sidebar> and the <ComponentCatalogPanels>
// for each component based on the URL.
export default class DocumentationPage extends Component {

  render() {
    const {sassDocData, location} = this.props;
    return (
      <div>
        <Route
          path={location.pathname}
          render={(props) => <SassDoc sassDocData={sassDocData} {...this.props} />}
        />
      </div>
    );
  }

}