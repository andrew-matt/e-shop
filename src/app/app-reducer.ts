import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false,
    isLoading: false,
    isFetching: false,
  },
  reducers: {
    setIsInitialized(state) {
      state.isInitialized = true;
    },
    setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
    setIsFetching(state, action: PayloadAction<{ isFetching: boolean }>) {
      state.isFetching = action.payload.isFetching;
    },
  },
});

export const appReducer = slice.reducer;

export const { setIsInitialized, setIsLoading, setIsFetching } = slice.actions;
