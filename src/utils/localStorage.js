import { debounced } from './performance';

export const defaultIngredientsStoreData = [];

export const getIngredientsStoreData = () => {
  try {
    const ingredientsData = JSON.parse(
      localStorage.getItem('ingredients'),
    );
    return ingredientsData || defaultIngredientsStoreData;
  } catch (err) {
    return defaultIngredientsStoreData;
  }
};

export const setIngredientsStoreData = debounced((ingredients) => {
  localStorage.setItem('ingredients', JSON.stringify(ingredients));
}, 1000);

export const defaultPriceStoreData = 0;

export const getPriceStoreData = () => {
  try {
    const localPrice = Number.parseFloat(
      localStorage.getItem('price'),
    );
    return localPrice || defaultPriceStoreData;
  } catch (err) {
    return defaultPriceStoreData;
  }
};

export const setPriceStoreData = debounced((price) => {
  localStorage.setItem('price', price.toString());
}, 1000);

export const defaultAuthStoreData = {
  idToken: null,
  user: null,
};

export const getAuthStoreData = () => {
  try {
    const { idToken, user } = JSON.parse(
      localStorage.getItem('auth'),
    );
    console.log({ idToken, user });
    return {
      idToken,
      user,
    };
  } catch (err) {
    return defaultAuthStoreData;
  }
};

export const setAuthStoreData = (authData) => {
  localStorage.setItem('auth', JSON.stringify(authData));
};

export const clearAuthStoreData = () => {
  localStorage.removeItem('auth');
};

export const getExpiresTime = () => {
  try {
    return Number.parseInt(localStorage.getItem('expiresTime'));
  } catch (err) {
    return null;
  }
};

export const setExpiresTime = (expiresTime) => {
  localStorage.setItem('expiresTime', expiresTime.toString());
};

export const clearExpiresTime = () => {
  localStorage.removeItem('expiresTime');
};
