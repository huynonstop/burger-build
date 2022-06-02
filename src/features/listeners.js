import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setIngredientsStoreData } from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';

export const ingredientsLocalSync = createListenerMiddleware();
ingredientsLocalSync.startListening({
  matcher: isAnyOf(
    addIngredients,
    removeIngredients,
    resetIngredients,
  ),
  effect: (action, listenerApi) => {
    const { ingredients, price } = listenerApi.getState();
    // debounce
    setIngredientsStoreData({ ingredients, price });
  },
});
