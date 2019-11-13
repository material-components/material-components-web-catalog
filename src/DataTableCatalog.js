import React, {useEffect} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import * as classNames from 'classnames';
import { cssClasses, MDCDataTable } from '@material/data-table';
import './styles/DataTableCatalog.scss';

const extraCssClasses = {
  CELL_CHECKBOX: 'mdc-data-table__cell--checkbox',
  HEADER_CELL: 'mdc-data-table__header-cell',
  HEADER_CELL_CHECKBOX: 'mdc-data-table__header-cell--checkbox',
}

let idIncrement = 0;

const DataTableCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<DataTableHero />}
      title='Data Table'
      description='Data tables display information in a way that’s easy to scan, so that users can look for patterns and insights.'
      designLink='https://material.io/go/design-data-tables'
      docsLink='https://material.io/components/web/catalog/data-tables/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table'
      demos={<DataTableDemos />}
      {...props}
    />
  );
};

const Checkbox = (props) => {
  const classes = classNames('mdc-checkbox', { 'mdc-checkbox--selected': props.isChecked }, props.classes);
  const { ariaLabel, ariaLabelledby } = props;

  return (
    <div className={classes}>
      <input type='checkbox' className='mdc-checkbox__native-control' defaultChecked={props.isChecked}
        aria-labelledby={ariaLabelledby} aria-label={ariaLabel} />
      <div className='mdc-checkbox__background'>
        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
          <path className='mdc-checkbox__checkmark-path' fill='none' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
        </svg>
        <div className='mdc-checkbox__mixedmark'></div>
      </div>
      <div className='mdc-checkbox__ripple'></div>
    </div>
  );
};

const HeaderCell = (props) => {
  const classes = classNames(extraCssClasses.HEADER_CELL, props.classes);

  return (
    <th className={classes} role='columnheader' scope='col'>
      {props.children}
    </th>
  );
};

const Cell = (props) => {
  const classes = classNames(cssClasses.CELL, {
    [cssClasses.CELL_NUMERIC]: props.isNumeric,
  }, props.classes);
  const { id } = props;

  return (
    <td className={classes} id={id}>{props.children}</td>
  );
};

const Row = (props) => {
  const classes = classNames(cssClasses.ROW, {
    [cssClasses.ROW_SELECTED]: props.isSelected,
  }, props.classes);
  const ariaSelectedValue = props.isSelected ? 'true' : 'false';

  return (
    <tr
      data-row-id={props.rowId}
      className={classes}
      aria-selected={ariaSelectedValue}
    >
      {props.children}
    </tr>
  );
};

const HeaderRowCheckboxCell = (props) => {
  const { ariaLabel } = props;

  return (
    <HeaderCell classes={extraCssClasses.HEADER_CELL_CHECKBOX}>
      <Checkbox classes={cssClasses.HEADER_ROW_CHECKBOX} aria-label={ariaLabel} />
    </HeaderCell>
  );
};

const RowCheckboxCell = (props) => {
  const { ariaLabelledby } = props;

  return (
    <Cell classes={extraCssClasses.CELL_CHECKBOX}>
      <Checkbox classes={cssClasses.ROW_CHECKBOX} isChecked={props.isChecked} ariaLabelledby={ariaLabelledby} />
    </Cell>
  );
};

const DataTable = (props) => {
  const dataTable = React.createRef();

  useEffect(() => {
    MDCDataTable.attachTo(dataTable.current);
  });

  return (
    <div className={cssClasses.ROOT} ref={dataTable}>
      <table className='mdc-data-table__table'>
        <thead>
          <tr className={cssClasses.HEADER_ROW}>
            {props.rowSelection ? <HeaderRowCheckboxCell ariaLabel='Toggle all rows' /> : null}
            {props.data.headers.map((header, index) => <HeaderCell key={index}>{header}</HeaderCell>)}
          </tr>
        </thead>
        <tbody className={cssClasses.CONTENT}>
          {props.data.rows.map((row, index) => {
            const isSelected = props.rowSelection ? props.data.selectedRowIndexes.indexOf(index) >= 0 : false;
            const rowId = `u${idIncrement++}`;
            return (
              <Row
                rowId={rowId}
                isSelected={isSelected} key={index}>
                {props.rowSelection ? <RowCheckboxCell ariaLabelledby={rowId} isChecked={isSelected} /> : null}
                {row.map((content, index) => {
                  let id = index === 0 ? rowId : null;
                  return <Cell key={index} id={id} isNumeric={typeof content === 'number'}>{content}</Cell>;
                })}
              </Row>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const sampleData = {
  headers: ['Dessert', 'Calories', 'Fat', 'Carbs', 'Protein (g)'],
  rows: [
    ['Frozen yogurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
  ],
};

const sampleRowSelectionData = {
  ...sampleData,
  selectedRowIndexes: [1],
};

const DataTableHero = () => <DataTable data={sampleData} />;
const DataTableDemos = () => (
  <div>
    <h4 className={'demo-data-table-header'}>Data Table Standard</h4>
    <DataTable data={sampleData} />
    <h4 className={'demo-data-table-header'}>Data Table with Row Selection</h4>
    <DataTable data={sampleRowSelectionData} rowSelection />
  </div>
);

export default DataTableCatalog;
