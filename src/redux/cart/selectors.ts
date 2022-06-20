import { RootState } from '../types';

import { CartSliceState } from './types';

export const selectCart = (state: RootState): CartSliceState => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find(obj => obj.id === id);
