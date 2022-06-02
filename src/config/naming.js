export const TYPES = {
  bread: {
    bot: 'bread-bottom',
    top: 'bread-top',
  },
  meat: 'meat',
  cheese: 'cheese',
  salad: 'salad',
  bacon: 'bacon',
};

export const LABEL = {
  [TYPES.meat]: 'Meat',
  [TYPES.cheese]: 'Cheese',
  [TYPES.salad]: 'Salad',
  [TYPES.bacon]: 'Bacon',
};

export const BASE_URL = 'https://udemy-burger-75d1f.firebaseio.com';

export const API_URL = {
  orders: 'orders.json',
  orderId: (id) => `orders/${id}.json`,
};
