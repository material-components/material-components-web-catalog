import React from 'react';
import classnames from 'classnames';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';

import './styles/LayoutGridCatalog.scss';

const LayoutGridCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<LayoutGridHero />}
      title='Layout Grid'
      description='Material design’s responsive UI is based on a 12-column grid layout.'
      docsLink='https://material.io/components/web/catalog/layout-grid/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid'
      demos={<LayoutGridDemos />}
    />
  )
};

export const LayoutGridHero = () => {
  return (
      <LayoutGrid className='demo-grid'>
        <LayoutGridInner>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
        </LayoutGridInner>
      </LayoutGrid>
  )
};

const LayoutGridDemos = () => {
  return (
    <div>
      <h3 className='mdc-typography--subtitle1'>Columns</h3>
      <LayoutGrid className='demo-grid'>
        <LayoutGridInner>
          <LayoutGridCell className='demo-cell' cols='6'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='3'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='2'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='1'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='3'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='1'></LayoutGridCell>
          <LayoutGridCell className='demo-cell' cols='8'></LayoutGridCell>
        </LayoutGridInner>
      </LayoutGrid>

      <h3 className='mdc-typography--subtitle1'>Grid Left Alignment</h3>
      <p className='mdc-typography--body2'>This requires a max-width on the top-level grid element.</p>
      <LayoutGrid className='demo-grid demo-grid--alignment' align='left'>
        <LayoutGridInner>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
        </LayoutGridInner>
      </LayoutGrid>

      <h3 className='mdc-typography--subtitle1'>Right Alignment</h3>
      <p className='mdc-typography--body2'>This requires a max-width on the top-level grid element.</p>
      <LayoutGrid className='demo-grid demo-grid--alignment' align='right'>
        <LayoutGridInner>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
          <LayoutGridCell className='demo-cell'></LayoutGridCell>
        </LayoutGridInner>
      </LayoutGrid>

      <h3 className='mdc-typography--subtitle1'>Cell Alignment</h3>
      <p className='mdc-typography--body2'>Cell alignment requires a cell height smaller than the inner height of the grid.</p>
      <LayoutGrid className='demo-grid demo-grid--cell-alignment'>
        <LayoutGridInner className='demo-inner'>
          <LayoutGridCell className='demo-cell demo-cell--alignment' align='top'></LayoutGridCell>
          <LayoutGridCell className='demo-cell demo-cell--alignment' align='middle'></LayoutGridCell>
          <LayoutGridCell className='demo-cell demo-cell--alignment' align='bottom'></LayoutGridCell>
        </LayoutGridInner>
      </LayoutGrid>
    </div>
  )
};

const LayoutGrid = (props) => {
  const classes = classnames('mdc-layout-grid', {
    'mdc-layout-grid--fixed-column-width': props.fixedWidth,
    [`mdc-layout-grid--align-${props.align}`]: props.align,
  }, props.className);

  return (
    <div className={classes}>{props.children}</div>
  )
};

const LayoutGridInner = (props) => {
  const classes = classnames('mdc-layout-grid__inner', props.className);
  return (
    <div className={classes}>{props.children}</div>
  )
};

const LayoutGridCell = (props) => {
  const classes = classnames('mdc-layout-grid__cell', {
    [`mdc-layout-grid__cell--span-${props.cols}`]: props.cols,
    [`mdc-layout-grid__cell--order-${props.order}`]: props.order,
    [`mdc-layout-grid__cell--align-${props.align}`]: props.align,
  }, props.className);

  return (
    <div className={classes}>{props.children}</div>
  )
};

export default LayoutGridCatalog;
