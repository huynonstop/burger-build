import { createSlice } from '@reduxjs/toolkit';
import {
  defaultIngredientsStoreData,
  getIngredientsStoreData,
} from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';

const reducers = {
  add(state, { payload }) {
    const { type } = payload;
    const id = `${Date.now().toString()}-${state.length}`;
    state.push({ id, type });
  },
  remove(state, { payload }) {
    const { id } = payload;
    return state.filter((ingredient) => ingredient.id !== id);
  },
  moveDown(state, { payload }) {
    const { index } = payload;
    const n = state.length;
    if (index === n - 1) {
      return state;
    }

    const t = state[index];
    state[index] = state[index + 1];
    state[index + 1] = t;
  },
  moveUp(state, { payload }) {
    const { index } = payload;
    const n = state.length;
    if (index === 0) {
      return state;
    }

    const t = state[index];
    state[index] = state[index - 1];
    state[index - 1] = t;
  },
  reset() {
    return defaultIngredientsStoreData;
  },
};

const ingredientsSlice = createSlice({
  name: ' ingredients',
  initialState: getIngredientsStoreData(),
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
