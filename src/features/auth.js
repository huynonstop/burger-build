import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const reducers = {
  setUser: (state, { payload }) => {
    const { user } = payload;
    state.user = user;
  },
  logout: () => {
    return initialState;
  },
};

const authSlice = createSlice({
  name: 'price',
  initialState,
  reducers,
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
