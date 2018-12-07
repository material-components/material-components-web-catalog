import React from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {imagePath} from './constants';

import './styles/ImageListCatalog.scss';

function ImageListCatalog() {
  return (
    <ComponentCatalogPanel
      hero={<ImageListHero />}
      title='Image List'
      description='Image lists display a collection of images in an organized grid.'
      designLink='https://material.io/go/design-image-list'
      docsLink='https://material.io/components/web/catalog/image-lists/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list'
      demos={<ImageListDemos />}
    />
  );
}

export const ImageListHero = () => {
  const items = [];
  for (let i = 0; i < 15; i++) {
    items.push('');
  }

  return (
      <div>
        <ImageList className='hero-image-list' items={items}
                   includeAspectContainer/>
      </div>
  );
};

function ImageListDemos() {
  const standardImageListItems = [];
  for (let i = 1; i <= 15; i++) {
    standardImageListItems.push(`3x2/${i}.jpg`);
  }

  const masonryImageListItems = [
    '3x2/16.jpg',
    '2x3/1.jpg',
    '3x2/1.jpg',
    '2x3/2.jpg',
    '2x3/3.jpg',
    '3x2/2.jpg',
    '2x3/4.jpg',
    '3x2/3.jpg',
    '2x3/5.jpg',
    '3x2/4.jpg',
    '2x3/6.jpg',
    '3x2/5.jpg',
    '2x3/7.jpg',
    '3x2/6.jpg',
    '3x2/7.jpg',
  ];

  return (
    <div>
      <h3 className='mdc-typography--subtitle1'>Standard Image List with Text Protection</h3>
      <ImageList className='standard-image-list mdc-image-list--with-text-protection' items={standardImageListItems}
        includeAspectContainer />
      <h3 className='mdc-typography--subtitle1'>Masonry Image List</h3>
      <ImageList className='mdc-image-list--masonry masonry-image-list' items={masonryImageListItems} />
    </div>
  );
}

function ImageList(props) {
  const items = props.items.map((src, i) =>
    src ?
      <ImageListItem src={`${imagePath}/photos/${src}`} label='Text label' key={i} includeAspectContainer={props.includeAspectContainer} />
      :
      <ImageListItem key={i} includeAspectContainer={props.includeAspectContainer} />
  );
  return (
    <ul className={`mdc-image-list ${props.className || ''}`}>
      {items}
    </ul>
  );
}

function ImageListItem(props) {
  return (
    <li className='mdc-image-list__item'>
      {props.includeAspectContainer ?
        <div className='mdc-image-list__image-aspect-container'>
          <ImageListImage src={props.src} alt={props.label} />
        </div>
        :
        <ImageListImage src={props.src} alt={props.label} />
      }
      {props.label &&
        <div className='mdc-image-list__supporting'>
          <span className='mdc-image-list__label'>{props.label}</span>
        </div>
      }
    </li>
  );
}

function ImageListImage(props) {
  if (props.src) {
    return (
      <img className='mdc-image-list__image' src={props.src} alt={props.alt} />
    );
  }
  // No-src used for ImageListHero
  return (
    <div className='mdc-image-list__image'></div>
  );
}

export default ImageListCatalog;
