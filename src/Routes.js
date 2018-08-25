import React from 'react';
import {Route} from 'react-router-dom';

const components = [{
  urlPath: 'button',
  filePath: './ButtonCatalog',
}, {
  urlPath: 'card',
  filePath: './CardCatalog',
}, {
  urlPath: 'checkbox',
  filePath: './CheckboxCatalog',
}, {
  urlPath: 'chips',
  filePath: './ChipsCatalog',
}, {
  urlPath: 'dialog',
  filePath: './DialogCatalog',
}, {
  urlPath: 'drawer',
  filePath: './DrawerCatalog',
}, {
  urlPath: 'elevation',
  filePath: './ElevationCatalog',
}, {
  urlPath: 'fab',
  filePath: './FabCatalog',
}, {
  urlPath: 'icon-button',
  filePath: './IconButtonCatalog',
}, {
  urlPath: 'image-list',
  filePath: './ImageListCatalog',
}, {
  urlPath: 'layout-grid',
  filePath: './LayoutGridCatalog',
}, {
  urlPath: 'list',
  filePath: './ListCatalog',
}, {
  urlPath: 'linear-progress-indicator',
  filePath: './LinearProgressIndicatorCatalog',
}, {
  urlPath: 'menu',
  filePath: './MenuCatalog',
}, {
  urlPath: 'radio',
  filePath: './RadioButtonCatalog',
}, {
  urlPath: 'ripple',
  filePath: './RippleCatalog',
}, {
  urlPath: 'select',
  filePath: './SelectCatalog',
}, {
  urlPath: 'shape',
  filePath: './ShapeCatalog',
}, {
  urlPath: 'slider',
  filePath: './SliderCatalog',
}, {
  urlPath: 'snackbar',
  filePath: './SnackbarCatalog',
}, {
  urlPath: 'switch',
  filePath: './SwitchCatalog',
}, {
  urlPath: 'tabs',
  filePath: './TabsCatalog',
}, {
  urlPath: 'text-field',
  filePath: './TextFieldCatalog',
}, {
  urlPath: 'theme',
  filePath: './ThemeCatalog',
}, {
  urlPath: 'top-app-bar',
  filePath: './TopAppBarCatalog',
}, {
  urlPath: 'typography',
  filePath: './TypographyCatalog',
}];

const Routes = ({sassDocData}) => {
  return (
    components.map((component) => {
      const {filePath, urlPath} = component;
      const Component = require(`${filePath}`).default;
      return (
        <Route
          key={urlPath}
          path={`/component/${urlPath}`}
          render={(props) => <Component sassDocData={sassDocData} {...props} />}
        />
      );
    })
  );
}

export default Routes;