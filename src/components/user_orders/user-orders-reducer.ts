import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GoodsItemType } from 'components/main/goods/goods-reducer';

export const slice = createSlice({
  name: 'user-orders',
  initialState: {
    orders: [] as OrderType[],
  },
  reducers: {
    setOrders(state, action: PayloadAction<{ orders: OrderType[] }>) {
      state.orders = action.payload.orders;
    },
  },
});

export const userOrdersReducer = slice.reducer;

export const { setOrders } = slice.actions;

// types
export type OrderType = {
  date: string;
  userEmail: string;
  order: {
    orderedGoods: GoodsItemType[];
    userData: {
      country: string;
      region: string;
      city: string;
      name: string;
      phone: string;
    };
  };
};
