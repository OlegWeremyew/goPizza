import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { selectCart } from 'redux/cart/selectors';
import { CartItemType } from 'redux/cart/types';

export const OrderDetails: FC = () => {
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: CartItemType) => sum + item.count,
    0,
  );
  return (
    <div className="cart__bottom-details">
      <span>
        {' '}
        Всего пицц: <b>{totalCount} шт.</b>{' '}
      </span>
      <span>
        {' '}
        Сумма заказа: <b>{totalPrice} ₽</b>{' '}
      </span>
    </div>
  );
};
