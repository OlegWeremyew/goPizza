import React, { FC } from 'react';

import { EMPTY_STRING } from '../../../../../constants';
import { typeNames } from '../AddPizza/data';

import { SelectorPizzaPropType } from './types';

export const SelectorPizza: FC<SelectorPizzaPropType> = ({
  types,
  setActiveType,
  activeType,
  sizes,
  setActiveSize,
  activeSize,
}) => (
  <div className="pizza-block__selector">
    <ul>
      {types.map(typeId => (
        <li
          key={typeId}
          onClick={() => setActiveType(typeId)}
          className={activeType === typeId ? 'active' : EMPTY_STRING}
        >
          {typeNames[typeId]}
        </li>
      ))}
    </ul>
    <ul>
      {sizes.map((size, index) => (
        <li
          key={size}
          onClick={() => setActiveSize(index)}
          className={activeSize === index ? 'active' : EMPTY_STRING}
        >
          {size} см.
        </li>
      ))}
    </ul>
  </div>
);
