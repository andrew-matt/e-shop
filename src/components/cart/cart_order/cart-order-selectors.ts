import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCost = (state: AppRootStateType): number =>
  state.goods.goodsTotalCost;

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.goods.goodsTotalCount;

export const selectGoodsTotalCostWithoutDiscount = (state: AppRootStateType): number =>
  state.goods.goodsTotalCostWithoutDiscount;
