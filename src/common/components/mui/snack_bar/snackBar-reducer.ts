import { SnackbarOrigin } from '@mui/material';
import { AlertColor } from '@mui/material/Alert/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'snackBar',
  initialState: {
    open: false,
    title: '',
    severity: '' as AlertColor,
    transition: 'grow' as 'grow' | 'slide',
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' } as SnackbarOrigin,
    classNames: {} as { snackBar: string; alert: string },
  },
  reducers: {
    showSnackBar(
      state,
      action: PayloadAction<{
        title: string;
        severity?: AlertColor;
        transition?: 'grow' | 'slide';
        anchorOrigin?: SnackbarOrigin;
        classNames?: { snackBar: string; alert: string };
      }>,
    ) {
      const { title, severity, transition, anchorOrigin, classNames } = action.payload;

      state.open = true;
      state.title = title;
      state.severity = severity || 'success';
      state.transition = transition || 'grow';
      state.anchorOrigin = anchorOrigin || { vertical: 'bottom', horizontal: 'left' };
      state.classNames = classNames || { snackBar: '', alert: '' };
    },
    hideSnackBar(state) {
      state.open = false;
    },
  },
});

export const snackBarReducer = slice.reducer;

export const { showSnackBar, hideSnackBar } = slice.actions;
