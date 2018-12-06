import React from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

const TypographyCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<TypographyHero/>}
      title='Typography'
      description='Roboto is the standard typeface on Android and Chrome.'
      designLink='https://material.io/go/design-typography'
      docsLink='https://material.io/components/web/catalog/typography/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography'
      demos={<TypographyDemos/>}
    />
  )
};

const TypographyHero = () => {
  return (
    <div>
      <h1 className='mdc-typography--headline1'>Typography</h1>
    </div>
  )
};

const TypographyDemos = () => {
  return (
    <div>
      <h1 className='mdc-typography--headline1'>Headline 1</h1>
      <h2 className='mdc-typography--headline2'>Headline 2</h2>
      <h3 className='mdc-typography--headline3'>Headline 3</h3>
      <h4 className='mdc-typography--headline4'>Headline 4</h4>
      <h5 className='mdc-typography--headline5'>Headline 5</h5>
      <h6 className='mdc-typography--headline6'>Headline 6</h6>
      <h6 className='mdc-typography--subtitle1'>Subtitle 1</h6>
      <h6 className='mdc-typography--subtitle2'>Subtitle 2</h6>
      <p className='mdc-typography--body1'>Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
      <p className='mdc-typography--body2'>Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
      <div><span className='mdc-typography--button'>Button text</span></div>
      <div><span className='mdc-typography--caption'>Caption text</span></div>
      <div><span className='mdc-typography--overline'>Overline text</span></div>
    </div>
  )
};

export default TypographyCatalog;
