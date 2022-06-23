import { createSlice } from '@reduxjs/toolkit';
import { TYPES } from '../config/naming';
import {
  defaultPriceStoreData,
  getPriceStoreData,
} from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';

const PRICE = {
  [TYPES.meat]: 2,
  [TYPES.cheese]: 1,
  [TYPES.salad]: 0.5,
  [TYPES.bacon]: 3,
};

const reducers = {
  add(state, { payload }) {
    const { type } = payload;
    return state + PRICE[type];
  },
  remove(state, { payload }) {
    const { type } = payload;
    return state - PRICE[type];
  },
  reset() {
    return defaultPriceStoreData;
  },
};

const priceSlice = createSlice({
  name: 'price',
  initialState: getPriceStoreData(),
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(addIngredients, reducers.add)
      .addCase(removeIngredients, reducers.remove)
      .addCase(resetIngredients, reducers.reset);
  },
});

export const priceActions = priceSlice.actions;
export const priceReducer = priceSlice.reducer;
