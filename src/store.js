import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { ingredientsReducer } from './features/ingredients';
import { priceReducer } from './features/price';
import { ingredientsLocalSync } from './features/listeners';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    price: priceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      createLogger(),
      ingredientsLocalSync.middleware,
    ]),
});
