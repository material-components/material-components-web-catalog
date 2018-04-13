# Material Components for the Web Catalog

This is the [catalog of demos](https://material-components.github.io/material-components-web-catalog/) for Material Components for Web (MDC Web).

## About

[Material Components for Web (MDC Web)](https://github.com/material-components/material-components-web) help developers execute [Material Design](https://www.material.io).
Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional web projects.

## Adding a new component

Follow these steps to add a new component to the MDC Web demo catalog.

1. Add a new file to the `src` directory for the JXS (e.g. `FooPage.js`). It should follow this template:
```
import React, { Component } from 'react';
import ComponentPage from './ComponentPage.js';
import HeaderBar from './HeaderBar.js';
import {MDCFoo} from '@material/foo';

import './FooPage.scss';

class FooPage extends Component {
  render() {
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
}

class FooHero extends Component {
  render() {
    return (
      // JSX for the Foo component's hero header
    );
  }
}

class FooDemos extends Component {
  render() {
    return (
      // JSX for the Foo component demos
    );
  }
}

export default FooPage;

``` 

2. Add a new file to the `src` directory for the styling the demo page (e.g. `FooPage.scss`):
```
@import "@material/foo/dist/mdc.foo";

// Custom styles here
```

3. Add an entry in the `urlToComponentPageMap` in `App.js`:
```
const urlToComponentPageMap = {
  ...,
  '/foo.html': <FooPage />,
};
```

4. Add a 24px icon associated with the component (e.g. `ic_foo_24px.svg`) to the `public/images` directory.

5. Render a new list item inside the `catalog-image-list` element in `App.js`:
```
{this.renderListItem('Foo', '/images/ic_foo_24px.svg', '/foo.html')}
```

6. Add a new entry in the `links` in the `renderSidebar(...)` method in `ComponentPage.js`:
```
const links = [
  ..., 
  {
    content: 'Foo',
    url: '/foo.html',
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
