# Material Components for the Web Catalog

This is the [catalog of demos](https://material-components.github.io/material-components-web-catalog/) for Material Components for Web (MDC Web).

## About

[Material Components for Web (MDC Web)](https://github.com/material-components/material-components-web) help developers execute [Material Design](https://www.material.io).
Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional web projects.

## Adding a new component

Follow these steps to add a new component to the MDC Web demo catalog.

1. Add a new file to the `src` directory for the JSX (e.g. `FooPage.js`). It should follow this template:

```js
import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCFoo} from '@material/foo/dist/mdc.foo';

import './FooPage.scss';

const FooPage = () => {
  return (
    <div>
      <HeaderBar title='Foo'/>
      <ComponentPage
        hero={<FooHero/>}
        title='Foo'
        description='A short description about the Foo component.'
        designLink='https://material.io/guidelines/components/foo.html'
        docsLink='https://material.io/components/web/catalog/foo/'
        sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-foo'
        demos={<FooDemos/>}
      />
    </div>
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

export default FooPage;

```

2. Add a new file to the `src` directory for the styling the demo page (e.g. `FooPage.scss`):

```js
@import "@material/foo/dist/mdc.foo";

// Custom styles here
```

Note that we import the compiled CSS `@material/foo/dist/mdc.foo` so we don't have to recompile Sass files.

3. Add an entry in the `urlToComponentPageMap` in `App.js`:

```js
const urlToComponentPageMap = {
  ...,
  '/material-components-web-catalog/foo': <FooPage />,
};
```

4. Add a 24px icon associated with the component (e.g. `ic_foo_24px.svg`) to the `src/images` directory.

5. Import the component icon and render a new list item inside the `catalog-image-list` element in `App.js`:

```js
import fooImg from './images/ic_foo_24px.svg';
```

```js
class App extends Component {
 // ...
  render() {
    return (
      ...
      {this.renderListItem('Foo', fooImg, '/material-components-web-catalog/foo')}
    );
  }
}
```

6. Add a new entry in the `links` in the `renderSidebar(...)` method in `ComponentPage.js`:

```js
const links = [
 // ...,
  {
    content: 'Foo',
    url: '/foo',
    active: activeLink === 'Foo',
  }
];
```

## Development

To start a local server of the catalog, run

```
npm start
```
Then point your browser to http://localhost:3000/.

## Deployment

To deploy the catalog to GitHub pages, run

```
npm run deploy
```
You should see it live on https://material-components.github.io/material-components-web-catalog/.
