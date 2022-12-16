import { AppRootStateType } from 'app/store';

export const selectIsLoggedIn = (state: AppRootStateType): boolean =>
  state.auth.isLoggedIn;

export const selectIsFetching = (state: AppRootStateType): boolean =>
  state.app.isFetching;

export const selectGoodsAmount = (state: AppRootStateType): number =>
  state.cart.goodsAmount;
