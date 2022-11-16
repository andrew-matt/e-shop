import { AppRootStateType } from 'app/store';
import { GoodsItemType } from 'common/data/data';

export const selectGoodsFromCart = (state: AppRootStateType): GoodsItemType[] =>
  state.cart;

export const selectGoodsTotalCount = (state: AppRootStateType): number =>
  state.goods.goodsTotalCount;
