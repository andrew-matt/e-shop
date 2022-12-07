import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.cart.goodsTotalCount;

export const selectGoodsTotalCost = (state: AppRootStateType): number =>
  state.cart.goodsTotalCost;

export const selectGoodsTotalCostWithoutDiscount = (state: AppRootStateType): number =>
  state.cart.goodsTotalCostWithoutDiscount;

export const selectDiscount = (state: AppRootStateType): number => state.cart.discount;

export const selectIsLoggedIn = (state: AppRootStateType): boolean =>
  state.auth.isLoggedIn;
