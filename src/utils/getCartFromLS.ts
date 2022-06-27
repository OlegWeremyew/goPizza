import { calcTotalPrice } from './calcTotalPrice';

import { EMPTY_ARRAY } from 'constants/variables';
import { CartItemType, CartSliceState } from 'redux/cart/types';

export const getCartFromLS = (): CartSliceState => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : EMPTY_ARRAY;
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItemType[],
    totalPrice,
  };
};
