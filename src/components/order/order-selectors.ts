import { AppRootStateType } from 'app/store';
import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const selectIsLoggedIn = (state: AppRootStateType): boolean =>
  state.auth.isLoggedIn;

export const selectGoodsInCart = (state: AppRootStateType): GoodsItemType[] =>
  state.cart.goodsInCart;

export const selectUserId = (state: AppRootStateType): string => state.auth.userId;

export const selectUserEmail = (state: AppRootStateType): string => state.auth.userEmail;

export const selectOrderIsComplete = (state: AppRootStateType): boolean =>
  state.order.orderIsComplete;
