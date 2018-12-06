import React from 'react';
import {Route} from 'react-router-dom';
import {ButtonHero} from './ButtonCatalog';
import {CardHero} from './CardCatalog';
import {CheckboxHero} from './CheckboxCatalog';
import {ChipsHero} from './ChipsCatalog';
import {DialogHero} from './DialogCatalog';
import {DrawerHero} from './DrawerCatalog';
import {ElevationHero} from './ElevationCatalog';
import {FabHero} from './FabCatalog';
import {IconButtonHero} from './IconButtonCatalog';
import {ImageListHero} from './ImageListCatalog';
import {LayoutGridHero} from './LayoutGridCatalog';
import {ListHero} from './ListCatalog';
import {MenuHero} from './MenuCatalog';
import {RadioButtonHero} from './RadioButtonCatalog';
import {RippleHero} from './RippleCatalog';
import {SelectHero} from './SelectCatalog';
import {SliderHero} from './SliderCatalog';
import {SnackbarHero} from './SnackbarCatalog';
import {SwitchHero} from './SwitchCatalog';
import {TabsHero} from './TabsCatalog';
import {TextFieldHero} from './TextFieldCatalog';
import {TopAppBarHero} from './TopAppBarCatalog';
import {TypographyHero} from './TypographyCatalog';
import {LinearProgressHero} from './LinearProgressIndicatorCatalog';
import { matchPath } from 'react-router';

const routesList = [{
  urlPath: 'button',
  Component: ButtonHero,
}, {
  urlPath: 'card',
  Component: CardHero,
}, {
  urlPath: 'checkbox',
  Component: CheckboxHero,
}, {
  urlPath: 'chips',
  Component: ChipsHero,
}, {
  urlPath: 'dialog',
  Component: DialogHero,
}, {
  urlPath: 'drawer',
  Component: DrawerHero,
}, {
  urlPath: 'elevation',
  Component: ElevationHero,
}, {
  urlPath: 'fab',
  Component: FabHero,
}, {
  urlPath: 'icon-button',
  Component: IconButtonHero,
}, {
  urlPath: 'image-list',
  Component: ImageListHero,
}, {
  urlPath: 'layout-grid',
  Component: LayoutGridHero,
}, {
  urlPath: 'list',
  Component: ListHero,
}, {
  urlPath: 'linear-progress-indicator',
  Component: LinearProgressHero,
}, {
  urlPath: 'menu',
  Component: MenuHero,
}, {
  urlPath: 'radio',
  Component: RadioButtonHero,
}, {
  urlPath: 'ripple',
  Component: RippleHero,
}, {
  urlPath: 'select',
  Component: SelectHero,
}, {
  urlPath: 'slider',
  Component: SliderHero,
}, {
  urlPath: 'snackbar',
  Component: SnackbarHero,
}, {
  urlPath: 'switch',
  Component: SwitchHero,
}, {
  urlPath: 'tabs',
  Component: TabsHero,
}, {
  urlPath: 'text-field',
  Component: TextFieldHero,
}, {
  urlPath: 'top-app-bar',
  Component: TopAppBarHero,
}, {
  urlPath: 'typography',
  Component: TypographyHero,
}];

const IFrameRoutes = (props) => {
  return (
    routesList.map((route) => {
      const {Component, urlPath} = route;
      if (!matchPath(props.location.pathname, `/component/iframe/${urlPath}`)) return;
      return (
          <div className='hero'
               key={urlPath}>
            <Route
                path={`/component/iframe/${urlPath}`}
                render={(props) => <Component {...props}/>} />
          </div>
      );
    })
  );
};

export default IFrameRoutes;
