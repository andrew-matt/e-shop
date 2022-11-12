import { AppRootStateType } from 'app/store';

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.goods.goodsTotalCount;
