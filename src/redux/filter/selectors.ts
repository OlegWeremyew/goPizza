import { RootState } from '../types';

import { FilterSliceState, Sort } from './types';

export const selectFilter = (state: RootState): FilterSliceState => state.filter;
export const selectSort = (state: RootState): Sort => state.filter.sort;
