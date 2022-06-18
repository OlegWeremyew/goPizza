import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateType } from './types';

const initialState: StateType = {
  categoryId: 0,
  value: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
