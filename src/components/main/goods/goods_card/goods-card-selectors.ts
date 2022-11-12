import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.goods.goodsTotalCount;

export const selectGoodsTotalCost = (state: AppRootStateType): number =>
  state.goods.goodsTotalCost;
