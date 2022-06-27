import { FilterSliceState, Sort } from './types';

import { RootState } from 'redux/types';

export const selectFilter = (state: RootState): FilterSliceState => state.filter;
export const selectSort = (state: RootState): Sort => state.filter.sort;
