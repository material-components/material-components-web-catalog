# Material Components for the Web Catalog

This is the [catalog of components](https://material-components.github.io/material-components-web-catalog/) for Material Components for the web (MDC Web).

## About

[Material Components for the web (MDC Web)](https://github.com/material-components/material-components-web) help developers execute [Material Design](https://www.material.io).
Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional web projects.

## Adding a new component

Follow these steps to add a new component to the MDC Web demo catalog.

1. Add a new file to the `src` directory for the JSX (e.g. `FooCatalog.js`). It should follow this template:

```js
import React, { Component } from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCFoo} from '@material/foo/index';

import './styles/FooCatalog.scss';

const FooCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<FooHero />}
      title='Foo'
      description='A short description about the Foo component.'
      designLink='https://material.io/guidelines/components/foo.html'
      docsLink='https://material.io/components/web/catalog/foo/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-foo'
      demos={<FooDemos />}
    />
  );
}

class FooHero extends Component {
  // Class methods for JS
  render() {
    return (
      // JSX for the Foo component's hero header
    );
  }
}

class FooDemos extends Component {
  // Class methods for JS
  render() {
    return (
      // JSX for the Foo component demos
    );
  }
}

export default FooCatalog;

```

> _NOTE_: If your components only require a `render` method, you can write functional components rather than classes,
> e.g. `function Foo() { ... }`. In this case, `props` are passed in as an argument instead of accessed via `this`.

2. Add a new file to the `src/styles` directory for styling the demo page (e.g. `FooCatalog.scss`):

```js
@import "@material/foo/mdc-foo";

// Custom styles here
```

3. Add a SVG image associated with the component (e.g. `foo_180px.svg`) to the `src/images` directory.

4. Import the SVG and render a new list item inside the `render()` element in `ComponentImageList.js`:

```js
import fooImg from './images/foo_180px.svg';

...

class ComponentImageList extends Component {
  ...
  render() {
    return (
      ...
      {this.renderListItem('Foo', fooImg, 'foo')}
    );
  }
}
```

5. Add a new entry in the `links` in the `render()` method in `ComponentSidebar.js`:

```js
const links = [
  ...,
  {
    content: 'Foo',
    url: '/foo',
  }
];
```

6. Add a `<Route>` in `ComponentPage.js`:

```js
import FooCatalog from './FooCatalog';

class ComponentPage extends Component {
  ...
  renderComponentRoutes() {
    ...
    <Route path='/component/foo' component={FooCatalog} />
  }
}
```

## Development

To start a local server of the catalog, run

```
npm start
```

Then point your browser to http://localhost:3000/.

## Local Testing

To run a build that can be locally tested using any HTTP server:

1. `npm run build`
2. Rename the `build` folder to `material-components-web-catalog`
3. Serve the top-level repository directory (e.g. with `live-server`)
4. Browse to http://localhost:<port>/material-components-web-catalog/

## Deployment

To deploy the catalog to GitHub pages, run

```
npm run deploy
```
You should see it live on https://material-components.github.io/material-components-web-catalog/.
