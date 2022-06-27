import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { GoCartIcon } from './GoCartIcon';

import { selectCart } from 'redux/cart/selectors';
import { CartItemType } from 'redux/cart/types';

export const GoCart: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: CartItemType) => sum + item.count,
    0,
  );
  return (
    <>
      <span>{totalPrice} ₽</span>
      <div className="button__delimiter" />
      <GoCartIcon />
      <span>{totalCount}</span>
    </>
  );
};
