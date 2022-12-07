import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userEmail: '',
    userId: '',
  },
  reducers: {
    setAuth(state, action: PayloadAction<{ userEmail: string; userId: string }>) {
      state.isLoggedIn = true;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
    },
    removeAuth(state) {
      state.isLoggedIn = false;
      state.userEmail = '';
      state.userId = '';
    },
  },
});

export const authReducer = slice.reducer;

export const { setAuth, removeAuth } = slice.actions;
