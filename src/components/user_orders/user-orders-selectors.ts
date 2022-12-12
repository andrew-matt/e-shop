import { AppRootStateType } from 'app/store';
import { OrderType } from 'components/user_orders/user-orders-reducer';

export const selectUserId = (state: AppRootStateType): string => state.auth.userId;

export const selectOrders = (state: AppRootStateType): OrderType[] =>
  state.userOrders.orders;

export const selectIsLoggedIn = (state: AppRootStateType): boolean =>
  state.auth.isLoggedIn;
