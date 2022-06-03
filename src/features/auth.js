import { createSlice } from '@reduxjs/toolkit';
import {
  defaultAuthStoreData,
  getAuthStoreData,
} from '../utils/localStorage';

const initialState = {
  user: null,
  idToken: null,
};

const reducers = {
  setUser: (state, { payload }) => {
    const { user } = payload;
    state.user = user;
  },
  setToken: (state, { payload }) => {
    const { idToken } = payload;
    state.idToken = idToken;
  },
  login: (state, { payload }) => {
    const { user, idToken } = payload;
    state.user = user;
    state.idToken = idToken;
  },
  logout: () => {
    return defaultAuthStoreData;
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthStoreData(),
  reducers,
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
