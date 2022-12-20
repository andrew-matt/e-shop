import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseGoodsItemType } from 'apis/goods-api';

export const slice = createSlice({
  name: 'goods',
  initialState: {
    goodsInStore: [] as GoodsItemType[],
  },
  reducers: {
    setGoods(state, action: PayloadAction<{ goods: ResponseGoodsItemType[] }>) {
      state.goodsInStore = action.payload.goods.map(goodsItem => ({
        amount: 1,
        ...goodsItem,
      }));
    },
  },
});

export const goodsReducer = slice.reducer;

export const { setGoods } = slice.actions;

// types
export type GoodsItemType = ResponseGoodsItemType & { amount: number };
