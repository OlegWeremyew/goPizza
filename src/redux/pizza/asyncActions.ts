import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';

import { Pizza, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async params => {
    const { sortBy, order, category, search, currentPage } = params;
    const endPoint = `https://626d16545267c14d5677d9c2.mockapi.io/items`;
    const { data } = await axios.get<Pizza[]>(endPoint, {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
