import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { ingredientsReducer } from './features/ingredients';
import { priceReducer } from './features/price';
import {
  authLocalSync,
  clearExpiredTimeout,
  ingredientsLocalSync,
  setExpiredTimeout,
} from './features/listeners';
import { authReducer } from './features/auth';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    price: priceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      createLogger(),
      ingredientsLocalSync.middleware,
      authLocalSync.middleware,
      setExpiredTimeout.middleware,
      clearExpiredTimeout.middleware,
    ]),
});
