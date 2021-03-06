import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItemType, CartSliceState } from './types';

import { EMPTY_ARRAY } from 'constants/variables';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { getCartFromLS } from 'utils/getCartFromLS';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj.id === action.payload);

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = EMPTY_ARRAY;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
