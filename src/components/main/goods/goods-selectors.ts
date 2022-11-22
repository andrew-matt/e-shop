import { AppRootStateType } from 'app/store';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const selectGoodsFromStore = (state: AppRootStateType): GoodsItemType[] =>
  state.goods.goodsInStore;
