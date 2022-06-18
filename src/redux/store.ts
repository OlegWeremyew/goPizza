import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './filter/slice';
import { AppDispatch } from './types';

export const store = configureStore({
  reducer: {
    filter,
  },
});

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
