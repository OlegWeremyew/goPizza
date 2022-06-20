import { RootState } from '../store';

import { PizzaSliceState } from './types';

export const selectPizzaData = (state: RootState): PizzaSliceState => state.pizza;
