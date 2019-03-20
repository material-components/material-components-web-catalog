import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {ButtonHeroLegacy} from './ButtonCatalog';
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
import {LinearProgressHero} from './LinearProgressIndicatorCatalog';
import {ListHero} from './ListCatalog';
import {MenuHero} from './MenuCatalog';
import {RadioButtonHero} from './RadioButtonCatalog';
import {RippleHero} from './RippleCatalog';
import {SelectHero} from './SelectCatalog';
import {SliderHero} from './SliderCatalog';
import {SnackbarHero} from './SnackbarCatalog';
import {SwitchHero} from './SwitchCatalog';
import {TabsHero} from './TabsCatalog';
import {TextFieldHeroLegacy} from './TextFieldCatalog';
import {TopAppBarHero} from './TopAppBarCatalog';

const routesList = [{
  urlPath: 'button',
  Component: ButtonHeroLegacy,
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
  urlPath: 'linear-progress-indicator',
  Component: LinearProgressHero,
}, {
  urlPath: 'list',
  Component: ListHero,
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
  Component: TextFieldHeroLegacy,
}, {
  urlPath: 'top-app-bar',
  Component: TopAppBarHero,
}];

const IFrameRoutes = (props) => {
  return (
    routesList.map((route) => {
      const {Component, urlPath} = route;
      return (
            <Route
                exact
                key={urlPath}
                path={`/component/iframe/${urlPath}`}
                render={(props) => (
                    <div className='hero-iframe'>
                      <Component {...props}/>
                    </div>)
                } />
      );
    })
  );
};

export default withRouter(IFrameRoutes);
