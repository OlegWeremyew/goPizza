import { RootState } from '../types';

import { PizzaSliceState } from './types';

export const selectPizzaData = (state: RootState): PizzaSliceState => state.pizza;
