import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.cart.goodsAmount;

export const selectGoodsTotalCost = (state: AppRootStateType): number =>
  state.cart.goodsCost;

export const selectGoodsTotalCostWithoutDiscount = (state: AppRootStateType): number =>
  state.cart.goodsCostWithoutDiscount;

export const selectDiscount = (state: AppRootStateType): number => state.cart.discount;

export const selectIsLoggedIn = (state: AppRootStateType): boolean =>
  state.auth.isLoggedIn;
