import { PizzaSliceState } from './types';

import { RootState } from 'redux/types';

export const selectPizzaData = (state: RootState): PizzaSliceState => state.pizza;
