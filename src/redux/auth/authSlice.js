import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, refreshCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isCurrentLoading: false,
  //   error: null,
};
// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    // [login.pending]: handlePending,
    // [register.pending]: handlePending,
    // [logout.pending]: handlePending,
    [refreshCurrentUser.pending](state) {
      state.isCurrentLoading = true;
    },
    // [login.rejected]: handleRejected,
    // [register.rejected]: handleRejected,
    // [logout.rejected]: handleRejected,
    [refreshCurrentUser.rejected](state) {
      state.isCurrentLoading = false;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [logout.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLogin = false;
    },
    [refreshCurrentUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLogin = true;
      state.isCurrentLoading = false;
    },
  },
});
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
