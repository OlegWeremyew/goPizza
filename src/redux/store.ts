import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cart from './cart/slice';
import filter from './filter/slice';
import { AppDispatch } from './types';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
