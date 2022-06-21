import React from 'react';

import { useSelector } from 'react-redux';

import { selectCart } from '../../../../redux/cart/selectors';

export const OrderDetails: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
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