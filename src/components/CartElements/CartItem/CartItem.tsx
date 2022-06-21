import React from 'react';

import { CartItemProps } from '../CartEmpty/types';

import { CartCount } from './CartCount';
import { CartItemInfo } from './CartItemInfo';
import { CartRemove } from './CartRemove';

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => (
  <div className="cart__item">
    <div className="cart__item-img">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
    </div>
    <CartItemInfo title={title} type={type} size={size} />
    <CartCount id={id} count={count} />
    <div className="cart__item-price">
      <b>{price * count} ₽</b>
    </div>
    <CartRemove id={id} />
  </div>
);
