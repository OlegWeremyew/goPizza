import React, { FC } from 'react';

import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel="&#5125;"
    previousLabel="&#5130;"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);
