import { TYPES } from '../config/naming';

export const defaultStoreData = {
  ingredients: {
    [TYPES.meat]: 0,
    [TYPES.cheese]: 0,
    [TYPES.salad]: 0,
    [TYPES.bacon]: 0,
  },
  price: 0,
};

export const getStoreData = () => {
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
      ingredients: { ...defaultStoreData.ingredients },
      price: defaultStoreData.price,
    };
  }
};

export const setStoreData = ({ price, ingredients }) => {
  localStorage.setItem('ingredients', JSON.stringify(ingredients));
  localStorage.setItem('price', price.toString());
};
