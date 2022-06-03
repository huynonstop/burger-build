import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  clearExpiresTime,
  setAuthStoreData,
  setExpiresTime,
  setIngredientsStoreData,
} from '../utils/localStorage';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from './actions';
import { authActions } from './auth';

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

export const authLocalSync = createListenerMiddleware();

authLocalSync.startListening({
  matcher: isAnyOf(authActions.login, authActions.logout),
  effect: (action, listenerApi) => {
    const { auth } = listenerApi.getState();
    setAuthStoreData(auth);
  },
});

let expiredTimeout = null;

export const setExpiredTimeout = createListenerMiddleware();

setExpiredTimeout.startListening({
  actionCreator: authActions.login,
  effect: ({ type, payload }, listenerApi) => {
    const { expiresTime, expiresInMS } = payload;
    clearTimeout(expiredTimeout);
    setExpiresTime(expiresTime);
    console.log('will logout at %d, in %d', expiresTime, expiresInMS);
    setTimeout(() => {
      listenerApi.dispatch(authActions.logout());
    }, expiresInMS);
  },
});

export const clearExpiredTimeout = createListenerMiddleware();

clearExpiredTimeout.startListening({
  actionCreator: authActions.logout,
  effect: (action, listenerApi) => {
    clearTimeout(expiredTimeout);
    clearExpiresTime();
  },
});
