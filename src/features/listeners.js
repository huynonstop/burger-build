import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setStoreData } from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';

export const localSync = createListenerMiddleware();
localSync.startListening({
  matcher: isAnyOf(
    addIngredients,
    removeIngredients,
    resetIngredients,
  ),
  effect: (action, listenerApi) => {
    const { ingredients, price } = listenerApi.getState();
    setStoreData({ ingredients, price });
  },
});
