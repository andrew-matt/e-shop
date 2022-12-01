import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isInitialized: false,
  },
  reducers: {
    setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
    setIsInitialized(state) {
      state.isInitialized = true;
    },
  },
});

export const appReducer = slice.reducer;

export const { setIsLoading, setIsInitialized } = slice.actions;
