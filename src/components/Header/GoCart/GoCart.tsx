import React from 'react';

import { useSelector } from 'react-redux';

import { selectCart } from '../../../redux/cart/selectors';

import { GoCartIcon } from './GoCartIcon';

export const GoCart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  return (
    <>
      <span>{totalPrice} ₽</span>
      <div className="button__delimiter" />
      <GoCartIcon />
      <span>{totalCount}</span>
    </>
  );
};
