import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]): number =>
  items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
