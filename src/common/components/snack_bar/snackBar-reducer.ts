import { AlertColor } from '@mui/material/Alert/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'snackBar',
  initialState: {
    open: false,
    title: '',
    severity: '' as AlertColor,
  },
  reducers: {
    showSnackBar(state, action: PayloadAction<{ title: string; severity: AlertColor }>) {
      state.open = true;
      state.title = action.payload.title;
      state.severity = action.payload.severity;
    },
    hideSnackBar(state) {
      state.open = false;
    },
  },
});

export const snackBarReducer = slice.reducer;

export const { showSnackBar, hideSnackBar } = slice.actions;
