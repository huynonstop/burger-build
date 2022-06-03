import { createAction } from '@reduxjs/toolkit';

export const addIngredients = createAction('redux/addIngredients');
export const removeIngredients = createAction(
  'redux/removeIngredients',
);
export const resetIngredients = createAction(
  'redux/resetIngredients',
);
