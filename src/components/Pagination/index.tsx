import React from 'react';

import ReactPaginate from 'react-paginate';

import { ReturnComponentType } from '../../types';

import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage, currentPage }: any): ReturnComponentType => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    forcePage={currentPage - 1}
    pageCount={3}
  />
);

export default Pagination;
