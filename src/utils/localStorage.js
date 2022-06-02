import { TYPES } from '../config/naming';
import { debounced } from './performance';

export const defaultIngredientsStoreData = {
  ingredients: {
    [TYPES.meat]: 0,
    [TYPES.cheese]: 0,
    [TYPES.salad]: 0,
    [TYPES.bacon]: 0,
  },
  price: 0,
};

export const getIngredientsStoreData = () => {
  try {
    const localIngredients = {};
    const ingredientsData = JSON.parse(
      localStorage.getItem('ingredients'),
    );
    localIngredients[TYPES.meat] =
      Number.parseInt(ingredientsData[TYPES.meat]) || 0;
    localIngredients[TYPES.bacon] =
      Number.parseInt(ingredientsData[TYPES.bacon]) || 0;
    localIngredients[TYPES.cheese] =
      Number.parseInt(ingredientsData[TYPES.cheese]) || 0;
    localIngredients[TYPES.salad] =
      Number.parseInt(ingredientsData[TYPES.salad]) || 0;
    const localPrice = Number.parseFloat(
      localStorage.getItem('price'),
    );
    return {
      localIngredients,
      localPrice,
    };
  } catch (err) {
    return {
      ingredients: { ...defaultIngredientsStoreData.ingredients },
      price: defaultIngredientsStoreData.price,
    };
  }
};

export const setIngredientsStoreData = debounced(
  ({ price, ingredients }) => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
    localStorage.setItem('price', price.toString());
  },
  1000,
);
