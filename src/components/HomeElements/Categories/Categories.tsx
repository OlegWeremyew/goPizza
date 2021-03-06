import React, { FC, memo } from 'react';

import { EMPTY_STRING } from 'constants/variables';

import { categories } from './data';
import { CategoriesProps } from './types';

export const Categories: FC<CategoriesProps> = memo(({ value, onChangeCategory }) => (
  <div className="categories">
    <ul>
      {categories.map((categoryName, index) => (
        <li
          key={index}
          onClick={() => onChangeCategory(index)}
          className={value === index ? 'active' : EMPTY_STRING}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  </div>
));
