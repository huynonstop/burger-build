export const BASE_URL =
  'https://udemy-burger-75d1f.firebaseio.com/v2';
const API_KEY = 'AIzaSyAYnIufml7g4MTlgwR4ZCZb5ToLUcpUSzQ';
export const API_URL = {
  orders: 'orders.json',
  orderId: (id) => `orders/${id}.json`,
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  getUser: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
};
