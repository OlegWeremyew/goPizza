import React, { useState } from 'react';

import { ReturnComponentType } from '../types';

export const Categories = (): ReturnComponentType => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const categories: string[] = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const setNewActiveIndex = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setNewActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
