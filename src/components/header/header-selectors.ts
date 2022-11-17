import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCost = (state: AppRootStateType): number =>
  state.cart.goodsTotalCost;
