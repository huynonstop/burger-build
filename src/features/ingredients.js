import { createSlice } from '@reduxjs/toolkit';
import { defaultStoreData } from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';
import { localIngredients } from './localStorageData';

const reducers = {
  add(state, { payload }) {
    const { type } = payload;
    state[type] += 1;
  },
  remove(state, { payload }) {
    const { type } = payload;
    state[type] -= 1;
  },
  reset() {
    return { ...defaultStoreData.ingredients };
  },
};

const ingredientsSlice = createSlice({
  name: ' ingredients',
  initialState: localIngredients,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(addIngredients, reducers.add)
      .addCase(removeIngredients, reducers.remove)
      .addCase(resetIngredients, reducers.reset);
  },
});

export const ingredientsActions = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
