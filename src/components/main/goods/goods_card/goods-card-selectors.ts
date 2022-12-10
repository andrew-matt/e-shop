import { AppRootStateType } from 'app/store';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const selectGoodsInCart = (state: AppRootStateType): GoodsItemType[] =>
  state.cart.goodsInCart;
