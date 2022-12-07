import { AppRootStateType } from 'app/store';

export const selectIsFetching = (state: AppRootStateType): boolean =>
  state.app.isFetching;
