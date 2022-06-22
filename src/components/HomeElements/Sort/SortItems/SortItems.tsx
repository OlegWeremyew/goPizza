import React from 'react';

import { EMPTY_STRING } from '../../../../constants';
import { sortList } from '../data';

import { SortItemsPropsType } from './types';

export const SortItems: React.FC<SortItemsPropsType> = ({
  onClickListItem,
  SortProperty,
}) => (
  <div className="sort__popup">
    <ul>
      {sortList.map((obj, index) => (
        <li
          key={index}
          onClick={() => onClickListItem(obj)}
          className={SortProperty === obj.sortProperty ? 'active' : EMPTY_STRING}
        >
          {obj.name}
        </li>
      ))}
    </ul>
  </div>
);
