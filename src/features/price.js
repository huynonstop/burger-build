import { createSlice } from '@reduxjs/toolkit';
import { TYPES } from '../config/naming';
import { defaultStoreData } from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';
import { localPrice } from './localStorageData';

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
    return defaultStoreData.price;
  },
};

const priceSlice = createSlice({
  name: 'price',
  initialState: localPrice,
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
