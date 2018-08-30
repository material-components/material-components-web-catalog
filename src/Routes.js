import React from 'react';
import {Route} from 'react-router-dom';

import ButtonCatalog from './ButtonCatalog';
import CardCatalog from './CardCatalog';
import CheckboxCatalog from './CheckboxCatalog';
import ChipsCatalog from './ChipsCatalog';
import DialogCatalog from './DialogCatalog';
import DrawerCatalog from './DrawerCatalog';
import ElevationCatalog from './ElevationCatalog';
import FabCatalog from './FabCatalog';
import IconButtonCatalog from './IconButtonCatalog';
import ImageListCatalog from './ImageListCatalog';
import LayoutGridCatalog from './LayoutGridCatalog';
import ListCatalog from './ListCatalog';
import LinearProgressIndicatorCatalog from './LinearProgressIndicatorCatalog';
import MenuCatalog from './MenuCatalog';
import RadioButtonCatalog from './RadioButtonCatalog';
import RippleCatalog from './RippleCatalog';
import SelectCatalog from './SelectCatalog';
import ShapeCatalog from './ShapeCatalog';
import SliderCatalog from './SliderCatalog';
import SnackbarCatalog from './SnackbarCatalog';
import SwitchCatalog from './SwitchCatalog';
import TabsCatalog from './TabsCatalog';
import TextFieldCatalog from './TextFieldCatalog';
import ThemeCatalog from './ThemeCatalog';
import TopAppBarCatalog from './TopAppBarCatalog';
import TypographyCatalog from './TypographyCatalog';
import DocumentationPage from './DocumentationPage';

const routesList = [{
  urlPath: 'button',
  Component: ButtonCatalog,
}, {
  urlPath: 'card',
  Component: CardCatalog,
}, {
  urlPath: 'checkbox',
  Component: CheckboxCatalog,
}, {
  urlPath: 'chips',
  Component: ChipsCatalog,
}, {
  urlPath: 'dialog',
  Component: DialogCatalog,
}, {
  urlPath: 'drawer',
  Component: DrawerCatalog,
}, {
  urlPath: 'elevation',
  Component: ElevationCatalog,
}, {
  urlPath: 'fab',
  Component: FabCatalog,
}, {
  urlPath: 'icon-button',
  Component: IconButtonCatalog,
}, {
  urlPath: 'image-list',
  Component: ImageListCatalog,
}, {
  urlPath: 'layout-grid',
  Component: LayoutGridCatalog,
}, {
  urlPath: 'list',
  Component: ListCatalog,
}, {
  urlPath: 'linear-progress-indicator',
  Component: LinearProgressIndicatorCatalog,
}, {
  urlPath: 'menu',
  Component: MenuCatalog,
}, {
  urlPath: 'radio',
  Component: RadioButtonCatalog,
}, {
  urlPath: 'ripple',
  Component: RippleCatalog,
}, {
  urlPath: 'select',
  Component: SelectCatalog,
}, {
  urlPath: 'shape',
  Component: ShapeCatalog,
}, {
  urlPath: 'slider',
  Component: SliderCatalog,
}, {
  urlPath: 'snackbar',
  Component: SnackbarCatalog,
}, {
  urlPath: 'switch',
  Component: SwitchCatalog,
}, {
  urlPath: 'tabs',
  Component: TabsCatalog,
}, {
  urlPath: 'text-field',
  Component: TextFieldCatalog,
}, {
  urlPath: 'theme',
  Component: ThemeCatalog,
}, {
  urlPath: 'top-app-bar',
  Component: TopAppBarCatalog,
}, {
  urlPath: 'typography',
  Component: TypographyCatalog,
}];

const Routes = ({sassDocData}) => {
  return (
    routesList.map((route) => {
      const {Component, urlPath} = route;
      return (
        <React.Fragment key={urlPath}>
          <Route
            key={`${urlPath}-component`}
            path={`/component/${urlPath}`}
            render={(props) => <Component {...props} />}
            exact
          />
          <Route
            key={`${urlPath}-documentation`}
            path={`/component/${urlPath}/documentation`}
          render={(props) => <DocumentationPage {...props} sassDocData={sassDocData} />}
          />
        </React.Fragment>
      );
    })
  );
}

export default Routes;
export {routesList};