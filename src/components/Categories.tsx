import React, { FC, useState } from 'react';

import { ReturnComponentType } from '../types';

export type CategoriesType = {
  value: number;
  onChangeCategory: (value: number) => void;
};

export const Categories: FC<CategoriesType> = ({
  value,
  onChangeCategory,
}): ReturnComponentType => {
  const categories: string[] = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const setNewActiveIndex = (index: number): void => {
    onChangeCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => setNewActiveIndex(index)}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
