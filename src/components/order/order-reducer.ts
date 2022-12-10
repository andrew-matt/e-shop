import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'order',
  initialState: {
    orderIsComplete: false,
  },
  reducers: {
    setOrderIsComplete(state, action: PayloadAction<{ orderIsComplete: boolean }>) {
      state.orderIsComplete = action.payload.orderIsComplete;
    },
  },
});

export const orderReducer = slice.reducer;

export const { setOrderIsComplete } = slice.actions;
