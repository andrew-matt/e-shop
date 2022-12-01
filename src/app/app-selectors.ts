import { AppRootStateType } from 'app/store';

export const selectIsInitialized = (state: AppRootStateType): boolean =>
  state.app.isInitialized;
