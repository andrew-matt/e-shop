import { AppRootStateType } from 'app/store';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const selectGoodsFromCart = (state: AppRootStateType): GoodsItemType[] =>
  state.cart.goodsInCart;
