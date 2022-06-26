import React, { FC } from 'react';

import { CartItemInfoPropsType } from './types';

export const CartItemInfo: FC<CartItemInfoPropsType> = ({ title, type, size }) => (
  <div className="cart__item-info">
    <h3>{title}</h3>
    <p>
      {type}, {size} см.
    </p>
  </div>
);
