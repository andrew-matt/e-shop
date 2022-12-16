import { AlertColor } from '@mui/material/Alert/Alert';

import { AppRootStateType } from 'app/store';

export const selectOpen = (state: AppRootStateType): boolean => state.snackBar.open;

export const selectTitle = (state: AppRootStateType): string => state.snackBar.title;

export const selectSeverity = (state: AppRootStateType): AlertColor =>
  state.snackBar.severity;
